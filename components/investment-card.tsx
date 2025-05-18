import { cva, VariantProps } from "class-variance-authority";
import { Button } from "./ui/button";

const cardVariants = cva(
  "not-prose flex flex-col gap-4 w-full rounded-4xl p-8 my-4",
  {
    variants: {
      variant: {
        default: "bg-brand-secondary text-brand-secondary-lighter",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

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
  titleDingbats: string;
  beforeFeatures: string;
  features: string[];
  afterFeatures: string;
  cost: string;
}

export function InvestmentCard(p: InvestmentProps) {
  const { variant } = p;
  return (
    <section className={cardVariants({ variant })}>
      <h2 className="flex justify-between font-serif text-5xl">
        {p.title}
        <span className="ml-3 font-ding">{p.titleDingbats}</span>
      </h2>
      {p.beforeFeatures && <p className="mt-2">{p.beforeFeatures}</p>}
      <ul className="font-serif text-lg list-disc ml-4">
        {p.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      {p.afterFeatures && <p>{p.afterFeatures}</p>}
      <div className={calloutVariants({ variant })}>
        <span>Investment: ${p.cost}</span>
        <Button>Get Started</Button>
      </div>
    </section>
  );
}
