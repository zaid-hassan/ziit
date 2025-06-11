import { motion } from "framer-motion";
import SpotlightCard from "../spotlightcard/SpotlightCard";
import CardSwap, { Card } from "../cardswap/CardSwap";
import {
  IdCard,
  LaptopMinimalCheck,
  Share2,
  TrendingUp,
  UserRoundCheck,
} from "lucide-react";
import Orb from "../orb/Orb";
import GradientText from "../gradientText/GradientText";
const cardContent = [
  {
    title: "Industrial Training",
    description: "Gain hands-on experience in a real-world environment.",
    icon: <LaptopMinimalCheck color="oklch(0.83 0.24 300)" size={40} />,
  },
  {
    title: "Mentorship",
    description: "Learn from industry experts and enhance your skills.",
    icon: <UserRoundCheck color="oklch(0.83 0.24 300)" size={40} />,
  },
  {
    title: "Networking",
    description:
      "Connect with professionals and expand your career opportunities.",
    icon: <Share2 color="oklch(0.83 0.24 300)" size={40} />,
  },
  {
    title: "Growth",
    description:
      "Accelerate your journey with structured guidance and projects.",
    icon: <TrendingUp color="oklch(0.83 0.24 300)" size={40} />,
  },
];
function Home() {
  return (
    
      <main className="flex flex-col items-center justify-start w-full px-6 py-12 max-w-7xl mx-auto mt-11">
        <motion.h1
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 60,
            damping: 14,
          }}
        >
          <motion.span
            initial={{ filter: "blur(12px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1] }}
            className="text-3xl md:text-6xl font-title text-heading block"
          >
            Join Our Industrial Training Program
          </motion.span>
          <span className="text-xl font-subtitle text-muted block mt-2">
            Learn, Innovate, and Excel with Us!
          </span>
        </motion.h1>

        <div className="flex flex-col-reverse lg:flex-row items-center w-full gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
            {cardContent.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                <SpotlightCard
                  className="w-full bg-card h-full"
                  spotlightColor="rgba(255, 255, 255, 0.15)"
                >
                  <div className="flex flex-col items-center text-center p-4">
                    {card.icon}
                    <h2 className="text-xl font-title text-text">
                      {card.title}
                    </h2>
                    <p className="text-muted font-subtitle text-sm mt-2">
                      {card.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="w-full lg:w-1/2 h-[35rem] flex flex-col md:flex-row items-center justify-center rounded-xl relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="lg:hidden text-heading text-2xl w-fit font-display text-center">
              Additional CTA
            </div>
            <div className="w-full h-full relative">
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={2000}
                pauseOnHover={true}
                easing="linear"
              >
                <Card className="bg-card">
                  <h3 className="border-border border-b-1 p-1 text-muted font-display flex gap-x-2 items-center justify-start">
                    <IdCard /> Zura Intelligent Industrial Training
                  </h3>
                  <div className="h-full w-full relative">
                    <Orb
                      hoverIntensity={0.5}
                      rotateOnHover={true}
                      hue={0}
                      forceHoverState={false}
                      className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />

                    <motion.h1
                      className="card-font text-center text-text text-4xl px-2 py-1 transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none"
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      variants={{
                        initial: {
                          opacity: 1,
                          textShadow: "0 0 5px #f0f, 0 0 10px #f0f",
                        },
                        animate: {
                          opacity: [1, 0.7, 1, 0.9, 1],
                          textShadow: [
                            "0 0 5px #f0f, 0 0 10px #f0f",
                            "0 0 20px #f0f, 0 0 30px #f0f",
                            "0 0 8px #f0f, 0 0 16px #f0f",
                            "0 0 2px #f0f, 0 0 4px #f0f",
                            "0 0 6px #f0f, 0 0 12px #f0f",
                          ],
                          transition: {
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.4, 0.7, 1],
                          },
                        },
                        hover: {
                          scale: 1.08,
                          opacity: 1,
                          color: "#00f0ff",
                          textShadow: "0 0 16px #00f0ff, 0 0 32px #00f0ff",
                          transition: {
                            duration: 0.25,
                            ease: "easeOut",
                          },
                        },
                      }}
                    >
                      ZIIT
                    </motion.h1>
                  </div>
                </Card>

                <Card className="bg-card">
                  <h3 className="border-border border-b-1 p-1 text-muted font-display flex gap-x-2 items-center justify-start">
                    <IdCard /> What is ZIIT?
                  </h3>
                  <motion.div
                    whileHover={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                    className="flex h-full items-center justify-center"
                  >
                    <GradientText
                      colors={[
                        "oklch(0.83 0.24 300)",
                        "oklch(0.78 0.23 235)",
                        "oklch(0.83 0.24 300)",
                        "oklch(0.78 0.23 235)",
                        "oklch(0.83 0.24 300)",
                      ]}
                      animationSpeed={3}
                      showBorder={false}
                      className="font-display text-primary px-2 py-1 w-[80%] text-center shadow-md hover:shadow-lg transition-shadow duration-300 select-none"
                    >
                      This is not another certificate course. <br /> It’s a
                      career launchpad.
                    </GradientText>
                  </motion.div>
                </Card>

                <Card className="bg-card">
                  <h3 className="border-border border-b-1 p-1 text-muted font-display flex gap-x-2 items-center justify-start">
                    <IdCard /> Card 3
                  </h3>
                  <p className="font-display text-text px-2 py-1">
                    Your content here
                  </p>
                </Card>
              </CardSwap>
            </div>
          </motion.div>
        </div>
      </main>
  ); 
}

export default Home;
