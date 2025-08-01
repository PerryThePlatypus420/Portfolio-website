"use client";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mt-20"
      >
        Welcome to My Portfolio
      </motion.h1>
    </div>
  );
}
