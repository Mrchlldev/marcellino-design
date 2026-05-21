import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "src/content/posts",
    `${slug}.mdx`
  );

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(fileContent);

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <img
        src={data.thumbnail}
        alt={data.title}
        className="
          w-full
          h-[400px]
          object-cover
          border-[4px]
          border-black
          shadow-[8px_8px_0px_#000]
          mb-10
        "
      />

      <span
        className="
          inline-block
          px-4
          py-2
          mb-6
          bg-yellow-300
          border-[3px]
          border-black
          font-bold
        "
      >
        {data.category}
      </span>

      <h1
        className="
          text-5xl
          font-black
          mb-10
        "
      >
        {data.title}
      </h1>

      <article
        className="
          prose
          prose-neutral
          max-w-none
        "
      >
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
