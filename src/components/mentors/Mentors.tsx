import { motion } from "framer-motion";
import TiltedCard from "../tiltedCard/TiltedCard";
function Mentors() {
  return (
    <main id="mentors" className="flex flex-col items-center justify-start mt-11 w-full min-h-[50svh] px-6 py-12 max-w-7xl mx-auto">
          <motion.h1
            className="text-center mb-12 text-4xl font-title text-heading"
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
                <p className="drop-shadow-lg drop-shadow-black/70 font-ui-mono bg-surface/50 hover:bg-accent/50 text-muted hover:text-surface p-2 rounded-md w-fit">
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
                <p className="drop-shadow-lg drop-shadow-black/70 font-ui-mono bg-surface/50 hover:bg-accent/50 text-muted hover:text-surface p-2 rounded-md w-fit">
                  Kendrick Lamar - GNX
                </p>
              }
            />
          </motion.div>
        </main>
  )
}

export default Mentors