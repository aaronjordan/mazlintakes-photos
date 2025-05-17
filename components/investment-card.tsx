import { cva, VariantProps } from "class-variance-authority";

const cardVariants = cva("not-prose w-full rounded-4xl p-8", {
  variants: {
    variant: {
      default: "bg-brand-secondary text-brand-secondary-lighter",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const calloutVariants = cva("mt-2 font-serif text-2xl", {
  variants: {
    variant: {
      default: "text-brand-secondary-light",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface InvestmentProps extends VariantProps<typeof cardVariants> {
  title: string;
  features: string[];
  cost: string;
}

export function InvestmentCard(p: InvestmentProps) {
  const { variant } = p;
  return (
    <section className={cardVariants({ variant })}>
      <h2 className="font-serif text-5xl pb-2 mb-4">{p.title}</h2>
      <ul className="font-serif text-lg list-disc ml-4">
        {p.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div className={calloutVariants({ variant })}>Investment: ${p.cost}</div>
    </section>
  );
}
