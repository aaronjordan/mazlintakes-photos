import { InvestmentCard } from "@/components/investment-card";
import { StaticMarkdown } from "@/components/static-markdown";

export default function InvestmentPage() {
  return (
    <section>
      <header className="my-8 flex justify-center gap-4">
        <div className="font-ding text-4xl text-brand-main">4</div>
        <div>
          <h1 className="text-center font-pixel-display text-4xl">
            Investments
          </h1>
          <p className="text-center font-pixel text-md">
            (because who doesn't love flowers)
          </p>
        </div>
        <div className="font-ding text-4xl text-brand-main">4</div>
      </header>
      {/* <InvestmentCard
        variant="default"
        title="sprout"
        features={["feature 1", "feature 2"]}
        cost="9500"
      /> */}
      <StaticMarkdown filename="investments" />
    </section>
  );
}
