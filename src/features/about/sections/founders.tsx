import { useMemo } from "react";

const FOUNDED_YEAR = 2020;

const calculateAge = (birthYear: number) => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

export const Founders = () => {
  const age = useMemo(() => calculateAge(FOUNDED_YEAR), []);

  return (
    <section className="container py-24" aria-labelledby="founders-heading">
      <h2 id="founders-heading" className="mx-auto max-w-3xl text-center">
        <strong className="font-medium">
          Our story started with our founders, {age} years ago
        </strong>
      </h2>
    </section>
  );
};
