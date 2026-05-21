import Image from "next/image";

type Props = {
  title: string;
  category: string;
  thumbnail: string;
};

export default function BlogCard({
  title,
  category,
  thumbnail,
}: Props) {
  return (
    <div className="neo-card bg-white overflow-hidden">
      <div className="relative w-full h-56 border-b-4 border-black">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="inline-block px-4 py-2 border-4 border-black rounded-xl bg-[#FFE55C] font-bold text-sm">
          {category}
        </div>

        <h2 className="font-title text-3xl mt-5">
          {title}
        </h2>
      </div>
    </div>
  );
}