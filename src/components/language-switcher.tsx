import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function LanguageSwitcher() {
  const [loading, setLoading] = useState(true);
  const [startExit, setStartExit] = useState(false); // Estado para controlar o início da animação de saída
  const navigate = useNavigate();

  // Verifica se o dark mode está salvo no localStorage
  const [darkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  // Estado para controlar o texto de carregamento
  const language = useState<string>(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "en";
  })[0];

  // Simula um atraso antes de iniciar a animação de saída
  useEffect(() => {
    // Após 1.5 segundos, começa a animação de saída
    const exitTimer = setTimeout(() => {
      setStartExit(true); // Inicia a animação de saída
    }, 1500);

    // Após 2 segundos, navega para a próxima página
    const navigationTimer = setTimeout(() => {
      const savedLanguage = localStorage.getItem("language");

      if (savedLanguage === "pt") {
        navigate("/br");
      } else {
        navigate("/en");
      }

      setLoading(false);
    }, 2000); // Atraso de 2 segundos para navegação

    return () => {
      clearTimeout(exitTimer); // Limpa o timer de saída
      clearTimeout(navigationTimer); // Limpa o timer de navegação
    };
  }, [navigate]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-paper-dark' : 'bg-paper'}`}>
      <AnimatePresence>
        {loading && !startExit && ( // Exibe até que a animação de saída comece
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 100 }} // Sobe ao sair
            transition={{ duration: 0.5 }} // Duração da animação de saída
          >
            {/* Animação da imagem primeiro */}
            <motion.img
              src="/logo.png"
              alt="Exemplo de Imagem"
              className="h-40 w-40 ml-3" // Ajusta o espaçamento com 'mb-4'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }} // Sobe na saída
              transition={{ duration: 0.6 }}
            />

            {/* Animação do texto com delay */}
            <motion.p
              className="text-xl lg:text-2xl font-semibold mt-[-30px]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }} // Sobe na saída
              transition={{ delay: 0.3, duration: 0.4 }} // Delay para aparecer depois da imagem
            >
              {language === "pt" ? "Materializando itens..." : "Materializing items..."}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
