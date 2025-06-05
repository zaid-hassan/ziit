import { motion } from "framer-motion";
import SpotlightCard from "./components/spotlightcard/SpotlightCard";
import CardSwap, { Card } from "./components/cardswap/CardSwap";
import {
  IdCard,
  LaptopMinimalCheck,
  Share2,
  TrendingUp,
  UserRoundCheck,
} from "lucide-react";
import TiltedCard from "./components/tiltedCard/TiltedCard";
import ClickSpark from "./components/clickSpark/ClickSpark";

const cardContent = [
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
    <section className="flex flex-col items-center justify-center min-h-screen bg-background">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <main className="flex flex-col items-center justify-start w-full px-6 py-12 max-w-7xl mx-auto">
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
              className="text-4xl md:text-6xl font-title text-heading block"
            >
              Join Our Industrial Training Program
            </motion.span>
            <span className="text-2xl font-sans text-muted block mt-2">
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
                    className="w-full"
                    spotlightColor="rgba(255, 255, 255, 0.15)"
                  >
                    <div className="flex flex-col items-center text-center p-4">
                      {card.icon}
                      <h2 className="text-xl font-semibold text-text">
                        {card.title}
                      </h2>
                      <p className="text-muted text-sm mt-2">
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
              <div className="lg:hidden text-heading text-4xl w-fit font-display text-center">
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
                  {[1, 2, 3].map((n) => (
                    <Card key={n}>
                      <h3 className="border-border border-b-1 p-1 text-muted font-display flex gap-x-2 items-center justify-start">
                        <IdCard /> Card {n}
                      </h3>
                      <p className="font-display text-text px-2 py-1">
                        Your content here
                      </p>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </motion.div>
          </div>
        </main>

        <main className="flex flex-col items-center justify-start w-full min-h-[50svh] px-6 py-12 max-w-7xl mx-auto">
          <motion.h1
            className="text-center mb-12 text-4xl font-bold text-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 }}
          >
            Your Mentors
          </motion.h1>
          <motion.div
            className="flex flex-col md:flex-row w-full justify-evenly items-center gap-11"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
          >
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="drop-shadow-lg drop-shadow-black/70 bg-yellow-600/50  p-2 rounded-md w-fit">
                  Kendrick Lamar - GNX
                </p>
              }
            />
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="drop-shadow-lg drop-shadow-black/70 bg-yellow-600/50  p-2 rounded-md w-fit">
                  Kendrick Lamar - GNX
                </p>
              }
            />
          </motion.div>
        </main>
      </ClickSpark>
    </section>
  );
}

export default App;
