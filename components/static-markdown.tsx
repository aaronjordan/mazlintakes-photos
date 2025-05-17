import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";

export async function StaticMarkdown(props: { filename: string }) {
  const content = await Bun.file(`./static/${props.filename}.mdx`).text();

  return (
    <article className="prose prose-sm prose-stone w-[65ch] font-serif">
      <MDXRemote
        source={content}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </article>
  );
}
