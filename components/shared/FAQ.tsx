import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Bedtime Stories AI?",
      answer:
        "Bedtime Stories AI is an app that generates personalized bedtime stories using artificial intelligence. You can customize characters, settings, and themes to create a unique story experience for your child.",
    },
    {
      question: "Is it free to use?",
      answer:
        "The app offers a free version with limited stories. To access more stories and features, you will need to purchase credits.",
    },
    {
      question: "Is it suitable for all ages?",
      answer:
        "Yes, Bedtime Stories AI is designed to be suitable for children of all ages. You can customize stories to fit the age and interests of your child.",
    },
    {
      question: "Is it easy to use?",
      answer:
        "Absolutely! The app is designed with a user-friendly interface, making it easy for both parents and children to create and enjoy personalized stories.",
    },
    {
      question: "Is it safe for children?",
      answer:
        "Yes, safety is a top priority. The app is designed with child safety in mind, including secure data handling and age-appropriate content.",
    },
  ];

  return (
    <section className="py-20 bg-[#0E0E10]" id="faq">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#1C1C21] rounded-lg p-6 text-left border border-[#29292f] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {faq.question}
              </h3>
              <p className="text-[#afb0b6] text-base">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
