"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import Sidebar from "./Sidebar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6">
        <nav
          className="
            bg-white
            border-[4px]
            border-black
            shadow-[8px_8px_0px_#000]
            px-6
            py-4
            flex
            items-center
            justify-between
          "
        >
          <h1 className="font-title text-3xl">
            MD.
          </h1>

          <button
            onClick={() => setOpen(true)}
            className="
              w-14
              h-14
              flex
              items-center
              justify-center
              bg-[#FFB800]
              border-[4px]
              border-black
              shadow-[4px_4px_0px_#000]
              active:translate-x-[4px]
              active:translate-y-[4px]
              active:shadow-none
              transition-all
            "
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
