import { clientReviews } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="py-20 bg-[#0E0E10]" id="testimonials">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Parents Are Saying
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {clientReviews.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#1C1C21] rounded-lg p-6 text-left border border-[#29292f] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  width={50}
                  height={50}
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#afb0b6]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className="text-[#afb0b6] text-base">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
