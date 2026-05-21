"use client";

import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
};

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "UI Design",
    href: "/category/ui-design",
  },
  {
    title: "Frontend",
    href: "/category/frontend",
  },
  {
    title: "Inspiration",
    href: "/category/inspiration",
  },
];

export default function Sidebar({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/40
              backdrop-blur-md
              z-40
            "
          />

          <motion.aside
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 200,
            }}
            className="
              fixed
              top-0
              left-0
              h-screen
              w-[320px]
              bg-white
              border-r-[4px]
              border-black
              z-50
              p-6
              overflow-y-auto
            "
          >
            <div className="space-y-5 mt-20">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="
                    block
                    bg-[#FFB800]
                    border-[4px]
                    border-black
                    shadow-[6px_6px_0px_#000]
                    p-5
                    text-2xl
                    font-title
                    hover:translate-x-[4px]
                    hover:translate-y-[4px]
                    hover:shadow-none
                    transition-all
                  "
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
