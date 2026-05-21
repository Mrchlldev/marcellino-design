import Link from "next/link";

type Props = {
  title: string;
  category: string;
  thumbnail: string;
  slug: string;
};

export default function BlogCard({
  title,
  category,
  thumbnail,
  slug,
}: Props) {
  return (
    <Link href={`/blog/${slug}`}>
      <article
        className="
          bg-[#FFF4D6]
          border-[4px]
          border-black
          shadow-[8px_8px_0px_#000]
          hover:translate-x-[4px]
          hover:translate-y-[4px]
          hover:shadow-none
          transition-all
          overflow-hidden
          cursor-pointer
        "
      >
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-[220px] object-cover border-b-[4px] border-black"
        />

        <div className="p-5">
          <span
            className="
              inline-block
              px-3
              py-1
              mb-4
              text-sm
              font-bold
              bg-[#FFB800]
              border-[3px]
              border-black
            "
          >
            {category}
          </span>

          <h2
            className="
              text-2xl
              font-black
              leading-tight
            "
          >
            {title}
          </h2>
        </div>
      </article>
    </Link>
  );
}
