import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  BrainCircuit,
  ClipboardList,
  Mic,
  UserCheck,
  Network,
  CalendarCheck,
  Clock,
  MonitorPlay,
  CalendarClock,
  FileText,
  Target,
} from "lucide-react";
import StarBorder from "../starBorder/StarBorder";
import GlareHover from "../glareHover/GlareHover";

function OurOfferings() {
  const features = [
    {
      title: "Live Projects with Deployment",
      desc: "Ship real code, collaborate via GitHub, and build work that counts in interviews.",
      icon: Rocket,
    },
    {
      title: "Blockchain-Backed NFT Certificate",
      desc: "Your certificate will be minted as a lifetime-verifiable NFT, tamper-proof and globally authentic.",
      icon: ShieldCheck,
    },
    {
      title: "Mentorship from Global Tech Experts",
      desc: "Learn from professionals at Google, IBM, Walmart, and other tech giants.",
      icon: GraduationCap,
    },
    {
      title: "Sessions by Tech Execs & Industry Veterans",
      desc: "Special talks about hiring trends, career planning, and leadership.",
      icon: Briefcase,
    },
    {
      title: "Customized AI Tools Training",
      desc: "Train on real AI tools based on your interest — coding, content, design, or marketing.",
      icon: BrainCircuit,
    },
    {
      title: "Resume, GitHub & Portfolio Review",
      desc: "Refine your resume, optimize GitHub, and build a credible, polished portfolio.",
      icon: ClipboardList,
    },
    {
      title: "Placement-Focused Communication Training",
      desc: "Master interviews, articulation, presentations, and personal branding.",
      icon: Mic,
    },
    {
      title: "1-on-1 Communication Session (Premium)",
      desc: "Mock interviews, narrative help, or coaching tailored to your blocks.",
      icon: UserCheck,
    },
    {
      title: "Exclusive Tech Networks & Hiring Groups",
      desc: "Join private communities for job leads, mentorship, and freelance gigs.",
      icon: Network,
    },
    {
      title: "Career Guidance + Networking Event (Premium)",
      desc: "Meet peers and recruiters at a premium venue in Ranchi — elegant, real, and rewarding.",
      icon: CalendarCheck,
    },
  ];

  const structureItems = [
    {
      title: "Duration",
      value: "45 Days",
      icon: Clock,
    },
    {
      title: "Mode",
      value: "Hybrid (Live Online + Premium Offline Event)",
      icon: MonitorPlay,
    },
    {
      title: "Schedule",
      value: "3 Live Sessions/Week",
      note: "1 Hour Teaching + 1 Hour Doubt Clearing",
      icon: CalendarClock,
    },
    {
      title: "Daily Practice",
      value: "Light Daily Assignments",
      icon: FileText,
    },
    {
      title: "Weekend Projects",
      value: "Capstone Tasks Every Weekend",
      icon: Target,
    },
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center p-4 bg-background text-text">
      <motion.h1
        className="text-center mb-12 text-4xl md:text-5xl font-bold text-heading font-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 }}
      >
        Our Offerings
      </motion.h1>
      {/* Offerings */}
      <motion.div className="h-full w-full overflow-hidden">
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
          className="text-xl md:text-2xl text-center font-title text-accent mb-8"
        >
          Key Features of ZIIT
        </motion.h1>
        {/* features */}
      </motion.div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6  container">
        {features.map((feature, i) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              className=""
            >
              <StarBorder
                as="button"
                className="w-full h-fit"
                color="oklch(0.83 0.24 300)"
                speed="3s"
              >
                <div className="flex gap-2">
                  <Icon className="w-7 h-7 text-accent" />
                  <h3 className="text-xl font-semibold text-heading font-title">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted text-sm">{feature.desc}</p>
              </StarBorder>
            </motion.div>
          );
        })}
      </div>

      {/* Program Structure */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
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
          className="text-xl md:text-2xl text-center font-title text-accent mb-8"
        >
          Program Structure
        </motion.h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {structureItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className=" relative"
              >
                <GlareHover
                  glareColor="oklch(0.94 0.15 295 / 0.1)"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                  className="h-full border-none"
                >
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-md h-full w-full flex flex-col justify-between">
                    <Icon className="w-7 h-7 text-accent mb-2" />
                    <h3 className="text-lg font-semibold text-heading font-title">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm mt-1">{item.value}</p>
                    {item.note && (
                      <p className="text-muted text-xs italic mt-1">
                        {item.note}
                      </p>
                    )}
                  </div>
                </GlareHover>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </main>
  );
}

export default OurOfferings;
