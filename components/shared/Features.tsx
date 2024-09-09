import React from "react";
import { motion } from "framer-motion";

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-[#04052A] text-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Features
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        {[
          {
            icon: "🧠",
            title: "Fully Customizable",
            description:
              "Choose characters, setting, and themes to craft a unique story every time.",
          },
          {
            icon: "🎯",
            title: "AI-Powered Creativity",
            description:
              "Our AI generates original stories filled with imagination and wonder.",
          },
          {
            icon: "📍",
            title: "Real-time Tracking",
            description: "Track your journey in real-time with our mobile app.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/3 p-6 border border-gray-700 rounded-lg shadow-lg bg-[#1a2233]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <span className="text-2xl">{feature.icon}</span>
              <span>{feature.title}</span>
            </h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
