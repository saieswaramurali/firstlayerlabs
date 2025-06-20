"use client";

import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Pro User",
    price: "₹1499/mo",
    features: [
      "Up to 10 orders/month",
      "Multiple material options (PLA, PETG, ABS)",
      "Priority production & delivery",
      "Live support from print experts",
      "Revision requests (1 per model)",
    ],
    cta: "Start Pro",
    highlight: true,
    href: "/signup",
  },
  {
    name: "Enterprise",
    price: "Custom Plan",
    features: [
      "Unlimited uploads & 3D prints",
      "Advanced materials (Nylon, Resin, Carbon-fiber)",
      "Dedicated support engineer",
      "Bulk order discounts & scheduling",
      "Private dashboard + analytics",
    ],
    cta: "Contact Sales",
    highlight: false,
    href: "/contact",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function PricingPlans() {
  return (
    <section
      id="pricing"
      className="w-full px-6 md:px-20 py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Flexible <span className="text-primary">Plans</span> for Every Scale
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Whether you're prototyping frequently or managing production at scale,
          we’ve got you covered.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            variants={fadeIn}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Card
              className={`h-full flex flex-col justify-between rounded-3xl transition-all duration-300 ${
                plan.highlight
                  ? "bg-primary/10 border-2 border-primary"
                  : "bg-white"
              }`}
            >
              <div>
                <CardHeader className="text-center py-6 border-b font-semibold text-2xl text-gray-900">
                  {plan.name}
                </CardHeader>
                <CardBody className="flex flex-col items-center px-8 pt-6 pb-0">
                  <p className="text-3xl font-bold mb-4 text-gray-900 text-center">
                    {plan.price}
                  </p>
                  <ul className="text-gray-600 space-y-3 text-left w-full mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="relative pl-5">
                        <span className="absolute left-0 text-primary">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </div>
              <div className="px-8 pb-8 mt-auto w-full">
                <Button
                  as="a"
                  href={plan.href}
                  color={plan.highlight ? "primary" : "default"}
                  variant={plan.highlight ? "shadow" : "flat"}
                  size="lg"
                  radius="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
