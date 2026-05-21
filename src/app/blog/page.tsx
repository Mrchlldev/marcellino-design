import BlogCard from "@/components/BlogCard";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          category={post.category}
          thumbnail={post.thumbnail}
        />
      ))}
    </div>
  );
}