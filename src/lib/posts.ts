import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(
  process.cwd(),
  "src/content/posts"
);

export function getPosts() {
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");

    const fullPath = path.join(postsDirectory, file);

    const content = fs.readFileSync(fullPath, "utf-8");

    const { data } = matter(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      category: data.category,
      date: data.date,
      thumbnail: data.thumbnail,
    };
  });
}
