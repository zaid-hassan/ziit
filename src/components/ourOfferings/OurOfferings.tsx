import { motion } from "framer-motion";
function OurOfferings() {
  return (
    <main className="min-h-screen w-full flex flex-col ">
      <motion.h1
        className="text-center mb-12 text-4xl font-bold text-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 }}
      >
        Our Offerings
      </motion.h1>
      {/* Offerings */}
      <motion.div
        className="h-full bg-red-400 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.5 }}
      >
        
      </motion.div>
    </main>
  );
}

export default OurOfferings;
