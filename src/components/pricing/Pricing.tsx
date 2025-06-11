import PricingCard from "../pricingCard/PricingCard";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <div className="min-h-fit flex flex-col justify-start items-center">
      <motion.div className="h-fit w-full">
        <motion.h1
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.2,
            type: "spring",
            damping: 7,
          }}
          className="text-xl md:text-2xl text-center font-title text-accent"
        >
          Offered Plans
        </motion.h1>
      </motion.div>
      {/* Pricing cards */}
      <div className="flex w-screen md:w-full h-fit justify-center items-center overflow-auto">
        <PricingCard />
      </div>
    </div>
  );
}

export default Pricing;
