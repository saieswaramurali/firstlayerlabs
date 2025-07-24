"use client";

import { Card, CardHeader, CardBody } from "@heroui/react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 }
  }
};

export default function AboutUs() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-[#f8f9fc] to-white py-24 px-6 md:px-20 text-gray-800" id="about">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-primary">FirstLayerLabs</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          FirstLayerLabs is your gateway to fast, accessible, and reliable 3D printing. We empower designers, engineers, and makers to turn their ideas into tangible products — effortlessly.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto items-stretch">
        {[
          {
            title: "Why We Exist",
            body: "Our purpose is to unlock creativity by enabling on-demand production. We make custom fabrication simple for everyone, from students to startups."
          },
          {
            title: "Our Vision",
            body: "A world where prototyping and product development is instant and decentralized. We’re building tools that remove manufacturing friction."
          },
          {
            title: "What We Offer",
            body: (
              <ul className="list-disc list-inside space-y-1">
                <li>Support for STL, OBJ, 3MF formats</li>
                <li>Multiple material and print options</li>
                <li>Fast shipping & order tracking</li>
                <li>Live support for design assistance</li>
              </ul>
            )
          },
          {
            title: "The Team",
            body: "We’re engineers, designers, and makers passionate about automation and design. Our mission is to democratize advanced manufacturing for everyone."
          }
        ].map((section, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="h-full"
          >
            <Card
              shadow="sm"
              className="h-full flex flex-col justify-start p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out bg-white"
            >
              <CardHeader className="text-2xl font-semibold mb-2">
                {section.title}
              </CardHeader>
              <CardBody className="text-gray-600 text-base leading-relaxed grow">
                {section.body}
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
