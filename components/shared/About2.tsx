import Image from "next/image";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <section className="sm:px-10 bg-[#0E0E10] py-20" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {/* First Card */}
        <motion.div
          className="col-span-1 xl:row-span-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="border border-[#1C1C21] bg-[#141418] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/image1.jpg"
                alt="grid-1"
                className="w-full rounded-lg"
                width={400}
                height={400}
              />
            </motion.div>
            <div className="p-6">
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                Choose Your Setting
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                Let your stories take place in fantastical worlds, dreamy
                landscapes, or familiar places.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className="col-span-1 xl:row-span-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="border border-[#1C1C21] bg-[#141418] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/image2.jpg"
                alt="grid-2"
                className="w-full rounded-lg"
                width={400}
                height={400}
              />
            </motion.div>
            <div className="p-6">
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                Multiple Themes
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                Explore various themes such as adventure, friendship, or
                learning.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Third Card */}
        <motion.div
          className="col-span-1 xl:row-span-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="border border-[#1C1C21] bg-[#141418] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/3.jpg"
                alt="grid-3"
                className="w-full rounded-lg"
                width={400}
                height={400}
              />
            </motion.div>
            <div className="p-6">
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">
                Choose Action Location
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                Decide where the action unfolds—whether it’s in a magical
                forest, a distant galaxy, or under the sea.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About2;
