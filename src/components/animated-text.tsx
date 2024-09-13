import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Interface para as props do AnimatedLink
interface AnimatedLinkProps {
  to: string; // O caminho para onde o link deve ir
  text: string; // O texto a ser exibido no link
  darkMode: boolean; // Define se o tema escuro está ativo
  delay?: number; // Adicionando o delay opcional
}

export function AnimatedLink({ to, text, darkMode, delay = 2 }: AnimatedLinkProps) {
  const underlineVariants = {
    initial: { width: "0%" },
    hover: { width: "100%" },
  };

  return (
    <motion.a
      className={`relative flex p-1 justify-center items-center text-lg ${
        darkMode ? "text-gray-300" : "text-gray-700"
      }`}
      initial={{ opacity: 0, y: -20 }} // Início da animação (fora da tela)
      animate={{ opacity: 1, y: 0 }} // Animação final (visível)
      transition={{ delay, duration: 0.6, ease: "easeOut" }} // Aplicando o delay e animação
      whileHover="hover"
    >
      <ArrowRight className="h-4" />
      <Link to={to} className="ml-2">
        {text}
      </Link>
      <motion.div
        className={`absolute bottom-0 left-0 h-[2px] ${
          darkMode ? "bg-gray-300" : "bg-gray-700"
        }`}
        variants={underlineVariants}
        transition={{ duration: 0.3 }}
        style={{ width: "0%" }}
      />
    </motion.a>
  );
}
