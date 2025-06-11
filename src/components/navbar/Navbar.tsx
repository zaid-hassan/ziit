import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Map,
  Users,
  FolderKanban,
} from "lucide-react"; // Use icons as needed

const navLinks = [
  { label: "Home", href: "#", icon: <Home className="w-5 h-5" /> },
  { label: "Explore ZIIT", href: "#explore-ziit", icon: <Map className="w-5 h-5" /> },
  { label: "Mentors", href: "#mentors", icon: <Users className="w-5 h-5" /> },
  { label: "Projects", href: "#projects", icon: <FolderKanban className="w-5 h-5" /> },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(navLinks[0]);

  return (
    <nav
      className="
        fixed z-50 
        w-full max-w-xs md:max-w-xl mx-auto
        flex justify-evenly items-center
        bg-card/20 backdrop-blur-lg rounded-xl shadow-md
        transition-all duration-500 ease-in-out

        bottom-2 md:top-4 md:bottom-auto
        left-1/2 -translate-x-1/2 px-2 py-2
      "
    >
      {navLinks.map((link) => (
        <div
          key={link.label}
          onClick={() => setActiveLink(link)}
          className="relative flex flex-col items-center justify-center px-3 py-1.5 cursor-pointer"
        >
          <a
            href={link.href}
            className={`flex flex-col items-center text-xs font-medium transition-colors ${
              activeLink.label === link.label
                ? "text-accent"
                : "text-muted hover:text-accent-soft"
            }`}
          >
            {link.icon}
            <span className="mt-1">{link.label}</span>
          </a>

          {activeLink.label === link.label && (
            <motion.div
              layoutId="nav-underline"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full md:top-full md:bottom-auto"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      ))}
    </nav>
  );
}
