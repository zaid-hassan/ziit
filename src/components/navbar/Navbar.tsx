import { CircleUser, FolderKanban, Home, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex h-11 w-[90%] md:w-[40%] rounded-xl justify-evenly items-center gap-x-4 mx-auto bg-white/10 backdrop-blur-md transition-all duration-700 ease-in-out">
      <NavLink
        to="/"
        aria-label="home"
        className={({ isActive }) =>
          `flex items-center transition-transform duration-300 ease-in-out ${
            isActive
              ? "text-gruv-dark-accent scale-110"
              : "text-gruv-dark-accent-alt"
          } hover:text-gruv-dark-accent-hover`
        }
      >
        <Home className="w-6 h-6" />
      </NavLink>

      <NavLink
        to="/about"
        aria-label="about"
        className={({ isActive }) =>
          `flex items-center transition-transform duration-300 ease-in-out ${
            isActive
              ? "text-gruv-dark-accent scale-110"
              : "text-gruv-dark-accent-alt"
          } hover:text-gruv-dark-accent-hover`
        }
      >
        <CircleUser className="w-6 h-6" />
      </NavLink>

      <NavLink
        to="/contact"
        aria-label="contact"
        className={({ isActive }) =>
          `flex items-center transition-transform duration-300 ease-in-out ${
            isActive
              ? "text-gruv-dark-accent scale-110"
              : "text-gruv-dark-accent-alt"
          } hover:text-gruv-dark-accent-hover`
        }
      >
        <Mail className="w-6 h-6" />
      </NavLink>

      <NavLink
        to="/projects"
        aria-label="projects"
        className={({ isActive }) =>
          `flex items-center transition-transform duration-300 ease-in-out ${
            isActive
              ? "text-gruv-dark-accent scale-110"
              : "text-gruv-dark-accent-alt"
          } hover:text-gruv-dark-accent-hover`
        }
      >
        <FolderKanban className="w-6 h-6" />
      </NavLink>
    </nav>
  );
}

export default Navbar;
