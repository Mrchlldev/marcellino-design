export default function Navbar() {
  return (
    <nav className="w-full border-b-4 border-black bg-[#FFE55C]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="font-title text-2xl">
          Marcellino Desain.
        </h1>

        <div className="flex gap-4">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
        </div>
      </div>
    </nav>
  );
}