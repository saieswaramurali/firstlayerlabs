import { Button, Link } from "@heroui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function HeroSection() {

  const navigate = useNavigate() ; 

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Bring Your <span className="text-primary">Ideas</span> to Life
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            Upload your 3D models in STL, OBJ, or 3MF formats and let us print and ship them straight to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onPress = {() => navigate("/upload")} 
              color="primary"
              size="lg"
              radius="lg"
              className="font-medium"
            >
              Upload 3D Model
            </Button>
            <Button
              onPress = {() => navigate("how-it-works")}
              variant="bordered"
              size="lg"
              radius="lg"
              className="font-medium"
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Visual / Illustration */}
        <motion.div
          className="mb-10 md:mb-0 max-w-md md:max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <img
            src="/printer.png"
            alt="3D Model Display"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}