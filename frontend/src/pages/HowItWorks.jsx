"use client";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const steps = [
  {
    title: "1. Upload Your 3D Model",
    description:
      "Start by uploading your 3D model in STL, OBJ, or 3MF format. Our intuitive platform makes it simple to drag, drop, and preview your design in seconds — no technical skills required.",
  },
  {
    title: "2. Customize Material & Finish",
    description:
      "Choose from a variety of materials including PLA, ABS, and Resin. You can also select surface finishes, color preferences, and resolution based on your application — whether it's prototyping or a final product.",
  },
  {
    title: "3. Get Instant Pricing & Confirm",
    description:
      "Our smart system analyzes your model and instantly generates a competitive price. Review the estimated cost, make any adjustments if needed, and confirm the order without hidden fees.",
  },
  {
    title: "4. We Print & Deliver to You",
    description:
      "Once confirmed, your model enters production. Our team ensures precision printing, careful quality checks, and secure packaging before dispatching it to your doorstep with live order tracking.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.5, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HowItWorks() {
  return (
    <section
      className="w-full bg-gradient-to-b from-white to-gray-50 py-24 px-6 md:px-20"
      id="how-it-works"
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          How <span className="text-primary">It Works</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Whether you’re a designer, maker, or entrepreneur, our process makes
          3D printing easy, fast, and seamless from start to finish.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-10 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            variants={stepVariants}
            className="w-full flex flex-col items-center"
          >
            <Card className="w-full p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
              <CardHeader className="text-2xl font-semibold mb-3">
                {step.title}
              </CardHeader>
              <CardBody className="text-gray-600 text-base leading-relaxed">
                {step.description}
              </CardBody>
            </Card>

            {/* Down arrow unless it's the last step */}
            {index !== steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.5 }}
                className="mt-4"
              >
                <ChevronDown className="h-8 w-8 text-gray-400" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
