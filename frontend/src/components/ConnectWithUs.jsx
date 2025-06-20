"use client";

import { Input, Textarea, Button, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

export default function ConnectWithUs() {
  return (
    <section
      id="contact"
      className="w-full px-6 md:px-20 py-24 bg-gradient-to-br from-white to-gray-50"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          whileHover={{ scale: 1.015, boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="bg-white/30 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl p-8">
            <CardBody>
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6 text-center"
                variants={itemVariants}
                custom={0}
              >
                Get in Touch
              </motion.h2>
              <motion.p
                className="text-gray-600 mb-10 text-center"
                variants={itemVariants}
                custom={1}
              >
                Have a question or want to work with us? Fill out the form and we’ll get back to you soon.
              </motion.p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} custom={2}>
                  <Input
                    label="Name"
                    isRequired
                    placeholder="Your Name"
                    variant="bordered"
                  />
                </motion.div>
                <motion.div variants={itemVariants} custom={3}>
                  <Input
                    label="Email"
                    isRequired
                    placeholder="your@email.com"
                    type="email"
                    variant="bordered"
                  />
                </motion.div>
                <motion.div variants={itemVariants} custom={4} className="md:col-span-2">
                  <Textarea
                    label="Message"
                    placeholder="Your message here..."
                    variant="bordered"
                    minRows={4}
                    isRequired
                  />
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  custom={5}
                  className="md:col-span-2 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button color="primary" size="lg" radius="lg" className="px-10 shadow-md">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
