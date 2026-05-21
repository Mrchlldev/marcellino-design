import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import { getPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getPosts();

  return (
    <>
      <Navbar />
      <Hero />

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[300px_1fr] gap-10">
          <Sidebar />

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
        </div>
      </section>

      <Footer />
    </>
  );
}
