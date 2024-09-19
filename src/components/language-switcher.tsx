import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence} from "framer-motion"; // Para redirecionamento

export function LanguageSwitcher() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Verifica se o dark mode está salvo no localStorage
  const darkMode = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true"; // Se "true", ativa o dark mode
  })[0];

  // Estado para controlar o texto de carregamento
  const language = useState<string>(() => {
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || "en"; // Padrão é 'en' se não houver linguagem salva
  })[0];

  // Simula um atraso antes de exibir o conteúdo
  useEffect(() => {
    const timer = setTimeout(() => {
      // Verifica a linguagem no localStorage
      const savedLanguage = localStorage.getItem("language");

      if (savedLanguage === "pt") {
        navigate("/br"); // Redireciona para a página em português
      } else {
        navigate("/en"); // Redireciona para a página em inglês (padrão)
      }

      setLoading(false); // Desativa o estado de carregamento
    }, 2000); // Atraso de 2 segundos

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, [navigate]);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-paper-dark' : 'bg-paper'}`}>
      <AnimatePresence>
        {/* Se estiver carregando, mostre a animação */}
        {loading && (
          <motion.div
            className="text-center mb-40"
            initial={{ opacity: 0 }} // Opacidade inicial zero para toda a div
            animate={{ opacity: 1 }} // Anima opacidade para 1
            exit={{ opacity: 0 }} // Sobe fora da tela ao sair
            transition={{ duration: 1 }} // Duração da animação
          >
            {/* Animação da imagem primeiro */}
            <motion.img
              src="/logo.png"
              alt="Exemplo de Imagem"
              className="h-40 w-40 ml-3"
              initial={{ y: 100, opacity: 0 }} // Começa fora da tela e invisível
              animate={{ y: 0, opacity: 1 }} // Anima para a posição inicial e visível
              transition={{ duration: 0.3 }} // Duração da animação
            />

            {/* Animação do texto com delay */}
            <motion.p
              className="text-2xl font-semibold"
              initial={{ y: 100, opacity: 0 }} // Começa fora da tela e invisível
              animate={{ y: 0, opacity: 1 }} // Anima para a posição inicial e visível
              transition={{ delay: 0.5, duration: 0.3 }} // Delay para aparecer depois da imagem
            >
              {language === "pt" ? "Materializando itens..." : "Materializing items..."}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
