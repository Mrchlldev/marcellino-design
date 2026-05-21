"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-title text-6xl md:text-8xl leading-none"
          >
            SHARE
            <br />
            YOUR
            <br />
            DESIGN.
          </motion.h1>

          <p className="mt-8 text-xl max-w-xl">
            Blog seputar UI Design, frontend aesthetics,
            Neo Brutalism, dan creative inspiration.
          </p>

          <button className="neo-button mt-8 bg-[#FF90E8] px-8 py-4 rounded-2xl font-bold">
            Explore Blog
          </button>
        </div>

        <div className="neo-card bg-[#90F6FF] p-8 rotate-2">
          <div className="aspect-square bg-white border-4 border-black rounded-2xl" />
        </div>
      </div>
    </section>
  );
}