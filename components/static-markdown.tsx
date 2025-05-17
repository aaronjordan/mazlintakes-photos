import fsp from "node:fs/promises";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import { InvestmentCard } from "./investment-card";
import { resolve } from "node:path";

export async function StaticMarkdown(props: { filename: string }) {
  const content = await fsp.readFile(resolve(`./static/${props.filename}`), {
    encoding: "utf-8",
  });

  return (
    <article className="prose prose-stone max-w-full w-[65ch] font-serif">
      <MDXRemote
        source={content}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        components={{ InvestmentCard }}
      />
    </article>
  );
}
