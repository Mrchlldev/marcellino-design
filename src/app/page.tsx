import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[300px_1fr] gap-10">
          <Sidebar />

          <div className="grid md:grid-cols-2 gap-8">
            <BlogCard
              title="Modern Neo Brutalism UI"
              category="UI Design"
              thumbnail="https://picsum.photos/600/400"
            />

            <BlogCard
              title="Creative Landing Page Ideas"
              category="Frontend"
              thumbnail="https://picsum.photos/600/401"
            />

            <BlogCard
              title="Glassmorphism Trends"
              category="Inspiration"
              thumbnail="https://picsum.photos/600/402"
            />

            <BlogCard
              title="Typography for Designers"
              category="Design"
              thumbnail="https://picsum.photos/600/403"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
