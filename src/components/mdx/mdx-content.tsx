import { JSX } from "react";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

import { AboutCard, Header, TwoColumn } from "./components";

const components = {
  Header,
  AboutCard,
  TwoColumn,
};

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
