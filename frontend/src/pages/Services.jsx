"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 }
  }
};

const services = [
  {
    title: "3D Model Upload",
    description: "Easily upload your STL, OBJ, or 3MF files. We support all major 3D model formats.",
  },
  {
    title: "Material Options",
    description: "Choose from a variety of filaments and resins, including PLA, PETG, and flexible TPU.",
  },
  {
    title: "Fast Turnaround",
    description: "We process, print, and ship your parts within 48–72 hours with live order tracking.",
  },
  {
    title: "Custom Print Settings",
    description: "Tweak layer height, infill, and support material options to suit your project's needs.",
  },
  {
    title: "Design Assistance",
    description: "Get real-time help from our engineers to optimize your models for better printing.",
  },
  {
    title: "Enterprise Orders",
    description: "Need bulk manufacturing? We support scalable print services for startups & enterprises.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-[#f9fafb] to-white py-24 px-6 md:px-20 text-gray-800" id="services">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          From prototype to production, we offer full-stack 3D printing services tailored to your creative needs.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="h-full"
          >
            <Card className="h-full p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white/80 backdrop-blur rounded-xl border border-gray-200">
              <CardHeader className="text-xl font-semibold mb-2">
                {service.title}
              </CardHeader>
              <CardBody className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
