export default function Sidebar() {
  const categories = [
    "UI Design",
    "Neo Brutalism",
    "Glassmorphism",
    "Frontend",
    "Inspiration",
  ];

  return (
    <aside className="neo-card bg-white p-6 h-fit sticky top-10">
      <h2 className="font-title text-2xl mb-6">
        Categories
      </h2>

      <div className="flex flex-wrap gap-3">
        {categories.map((item) => (
          <div
            key={item}
            className="border-4 border-black px-4 py-2 rounded-xl bg-[#B9FF66] font-bold"
          >
            {item}
          </div>
        ))}
      </div>
    </aside>
  );
}