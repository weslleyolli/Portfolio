import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface HeaderProps {
    darkMode: boolean;
    toggleTheme: () => void; // A função de alternar o tema não recebe argumentos
  }

export function Header({ darkMode, toggleTheme }: HeaderProps) {
  return (
    <header className="relative flex justify-between z-10">
      <Link to="/">
        <img className="h-20 md:h-28" src="./logo.png" alt="Logo" />
      </Link>
      <div className="flex justify-center items-center gap-3 md:gap-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/br">
            <p>BR</p>
          </Link>
        </motion.div>
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {darkMode ? <Sun className="h-5" /> : <Moon className="h-5" />}
        </motion.button>
        <motion.a
          href="#"
          className="flex p-1 justify-center items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={darkMode ? "./menu-dark.png" : "./menu.png"}
            alt="Menu Icon"
            className="h-6 md:h-8"
          />
        </motion.a>
      </div>
    </header>
  );
}