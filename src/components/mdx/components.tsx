export function AboutCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-20 rounded-lg border border-primary bg-violet-50 py-20 shadow-primary-md">
      <h2 className="not-prose mx-auto mb-4 max-w-2xl text-center font-monaSans font-bold capitalize leading-tight text-gray-900">
        Our {title} Service
      </h2>
      <div className="not-prose mx-auto max-w-5xl text-balance px-4 text-center text-xl">
        {children}
      </div>
    </section>
  );
}

export function TwoColumn({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl gap-4 md:container md:grid md:grid-cols-2">
      {children}
    </div>
  );
}

export function Header({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl md:grid md:grid-cols-2 md:px-4 md:py-12">
      <h2 className="not-prose max-w-sm text-balance font-normal max-md:pb-4">
        Why <span className="capitalize text-secondary">{title} ?</span>
      </h2>
      <span className="not-prose space-y-3 text-balance md:text-xl">
        {children}
      </span>
    </section>
  );
}
