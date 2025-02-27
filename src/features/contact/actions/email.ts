"use server";

import { createSafeActionClient } from "next-safe-action";
import { Resend } from "resend";

import ContactTemplate from "../template/template";
import { contactSchema, zContactSchema } from "../types/schema";

const resend = new Resend(process.env.RESEND_API_KEY);
const action = createSafeActionClient();

export const sendEmail = action
  .schema(contactSchema)
  .action(async ({ parsedInput }) => {
    await sendEnquiryToEmail(parsedInput);
    return { success: parsedInput };
  });

async function sendEnquiryToEmail(values: zContactSchema) {
  const { name, email } = values;

  const { data, error } = await resend.emails.send({
    from: "Enquiry <enquiry@zironmedia.com>",
    replyTo: email,
    to: "ashikh@zironmedia.com",
    subject: `Enquiry from ${name}`,
    react: ContactTemplate({ data: values }),
  });

  if (error) {
    console.log(error);
  }

  return data;
}
