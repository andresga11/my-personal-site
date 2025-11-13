import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import { theme } from "../styles/theme";
import { header } from "motion/react-client";
import { Moon, Sun } from "lucide-react"; // optional icons

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const currentTheme = isDarkMode ? theme.dark : theme.light;

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Project" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full backdrop-blur-sm p-4">
      <nav className="container-width-py-4">
        <div className="relative flex items-center justify-center">
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm rounded-lg transition-colors relative ${
                  activeTab === item.path
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {item.label}
                {activeTab === item.path && (
                  <motion.div
                    className="absolute inset-0 rounded-lg -z-10"
                    style={{ backgroundColor: currentTheme.nav.bubble }}
                    layoutId="bubble"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>
          <div className="absolute right-0">
            <button onClick={toggleTheme} className="p-2 transition">
              {isDarkMode ? (
                <Sun className="text-yellow-400" />
              ) : (
                <Moon className="text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
