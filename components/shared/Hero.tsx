import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-[#0E0E10] text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-start mb-12 md:mb-0  flex-col"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/2.jpg"
            alt="Features Illustration"
            className="w-full md:w-4/5 lg:w-3/4 rounded-lg"
            width={500}
            height={500}
          />

          <motion.a
            href="#features"
            className="inline-block px-8 py-4  text-black rounded-full font-medium text-lg "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/Play-Store.png"
              alt="Bedtime Story Illustration"
              className="rounded-lg mt-3"
              width={150}
              height={150}
            />
          </motion.a>
        </motion.div>

        <div className="md:w-1/2">
          <motion.h2
            className="text-3xl font-semibold mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Discover the Magic of Bedtime Stories AI
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              className="bg-[#1C1C21] rounded-lg p-6 border border-[#29292f] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Variety of Themes</h3>
              <p className="text-[#afb0b6] text-base">
                Explore a wide range of themes including adventure, friendship,
                and learning. Each story can be adapted to different moods and
                lessons.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#1C1C21] rounded-lg p-6 border border-[#29292f] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4">
                User-Friendly Interface
              </h3>
              <p className="text-[#afb0b6] text-base">
                Our intuitive design ensures that both parents and children can
                easily create and enjoy their personalized stories. Effortlessly
                navigate through the customization options to craft the perfect
                bedtime experience.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#1C1C21] rounded-lg p-6 border border-[#29292f] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4">Safe and Secure</h3>
              <p className="text-[#afb0b6] text-base">
                With a focus on child safety, our app ensures a secure and
                positive experience for all users. We prioritize privacy and
                data protection so you can focus on making bedtime magical.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
