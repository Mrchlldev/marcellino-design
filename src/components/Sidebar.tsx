"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  ChevronDown,
  X,
} from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const navigationLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const categories = [
  {
    title: "Social Media",
    links: [
      {
        title: "TikTok",
        href: "/category/tiktok",
      },
      {
        title: "Instagram",
        href: "/category/instagram",
      },
      {
        title: "YouTube",
        href: "/category/youtube",
      },
    ],
  },

  {
    title: "Design",
    links: [
      {
        title: "UI Design",
        href: "/category/ui-design",
      },
      {
        title: "Typography",
        href: "/category/typography",
      },
      {
        title: "Inspiration",
        href: "/category/inspiration",
      },
    ],
  },

  {
    title: "Development",
    links: [
      {
        title: "Frontend",
        href: "/category/frontend",
      },
      {
        title: "Next.js",
        href: "/category/nextjs",
      },
    ],
  },
];

export default function Sidebar({
  open,
  onClose,
}: Props) {
  const [openCategory, setOpenCategory] =
    useState<string | null>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

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
              flex
              flex-col
            "
          >
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-10">
                <h2 className="font-title text-3xl">
                  MENU
                </h2>

                <button
                  onClick={onClose}
                  className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    bg-red-400
                    border-[4px]
                    border-black
                    shadow-[4px_4px_0px_#000]
                    active:translate-x-[4px]
                    active:translate-y-[4px]
                    active:shadow-none
                    transition-all
                  "
                >
                  <X size={28} />
                </button>
              </div>

              <div className="space-y-4">
                {navigationLinks.map((link) => (
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

              <div className="mt-12">
                <h3
                  className="
                    text-xl
                    font-title
                    mb-5
                  "
                >
                  Categories
                </h3>

                <div className="space-y-5">
                  {categories.map((category) => {
                    const isOpen =
                      openCategory === category.title;

                    return (
                      <div
                        key={category.title}
                        className="
                          border-[4px]
                          border-black
                          bg-orange-300
                          shadow-[6px_6px_0px_#000]
                          overflow-hidden
                        "
                      >
                        <button
                          onClick={() =>
                            setOpenCategory(
                              isOpen
                                ? null
                                : category.title
                            )
                          }
                          className="
                            w-full
                            flex
                            items-center
                            justify-between
                            p-5
                            font-title
                            text-xl
                          "
                        >
                          {category.title}

                          <ChevronDown
                            className={`
                              transition-transform
                              ${
                                isOpen
                                  ? "rotate-180"
                                  : ""
                              }
                            `}
                          />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.25,
                              }}
                              className="
                                overflow-hidden
                                border-t-[4px]
                                border-black
                                bg-white
                              "
                            >
                              <div className="p-4 space-y-4">
                                {category.links.map(
                                  (link) => (
                                    <Link
                                      key={link.href}
                                      href={link.href}
                                      onClick={onClose}
                                      className="
                                        block
                                        bg-yellow-200
                                        border-[4px]
                                        border-black
                                        shadow-[4px_4px_0px_#000]
                                        p-4
                                        text-lg
                                        font-title
                                        hover:translate-x-[4px]
                                        hover:translate-y-[4px]
                                        hover:shadow-none
                                        transition-all
                                      "
                                    >
                                      {link.title}
                                    </Link>
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
