import { motion } from "framer-motion";
import SpotlightCard from "./components/spotlightcard/SpotlightCard";
import CardSwap, { Card } from "./components/cardswap/CardSwap";
import {
  LaptopMinimalCheck,
  Share2,
  TrendingUp,
  UserRoundCheck,
} from "lucide-react";
import type React from "react";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardContent: {
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Industrial Training",
    description: "Gain hands-on experience in a real-world environment.",
    icon: <LaptopMinimalCheck color="white" size={40} />,
  },
  {
    title: "Mentorship",
    description: "Learn from industry experts and enhance your skills.",
    icon: <UserRoundCheck color="white" size={40} />,
  },
  {
    title: "Networking",
    description:
      "Connect with professionals and expand your career opportunities.",
    icon: <Share2 color="white" size={40} />,
  },
  {
    title: "Growth",
    description:
      "Accelerate your journey with structured guidance and projects.",
    icon: <TrendingUp color="white" size={40} />,
  },
];

function App() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background overflow-hidden">
      <main className="flex flex-col items-center justify-start w-full px-6 py-12 max-w-7xl mx-auto">
        <motion.h1
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <span className="text-4xl font-bold text-heading block">
            Join Our Industrial Training Program
          </span>
          <span className="text-2xl text-muted block mt-2">
            Learn, Innovate, and Excel with Us!
          </span>
        </motion.h1>

        <div className="flex flex-col-reverse lg:flex-row items-center w-full gap-8">
          {/* Left Side: Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={textVariants}
          >
            {cardContent.map((card, index) => (
              <SpotlightCard
                className="w-full"
                spotlightColor="rgba(255, 255, 255, 0.15)"
                key={index}
              >
                <div className="flex flex-col items-center text-center p-4">
                  {card.icon}
                  <h2 className="text-xl font-semibold text-text">
                    {card.title}
                  </h2>
                  <p className="text-muted text-sm mt-2">{card.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>

          {/* Right Side: Optional Card Swap */}
          <motion.div
            className="w-full lg:w-1/2 h-[35rem] flex items-center justify-center rounded-xl relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-full relative">
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={2000}
                pauseOnHover={true}
                easing="linear"
              >
                <Card>
                  <h3>Card 1</h3>
                  <p>Your content here</p>
                </Card>
                <Card>
                  <h3>Card 2</h3>
                  <p>Your content here</p>
                </Card>
                <Card>
                  <h3>Card 3</h3>
                  <p>Your content here</p>
                </Card>
              </CardSwap>
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}

export default App;
