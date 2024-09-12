import { useState, useEffect, useRef } from "react";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { gsap } from 'gsap';

interface MousePosition {
    x: number;
    y: number;
}

export function HomePt() {
    const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("darkMode");
        return savedTheme === "true";
    });

    const handleMouseMove = (event: MouseEvent) => {
        setPosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    const ball1Ref = useRef<HTMLDivElement>(null);
    const ball2Ref = useRef<HTMLDivElement>(null);
    const ball3Ref = useRef<HTMLDivElement>(null);
    const ball4Ref = useRef<HTMLDivElement>(null);
    const ball5Ref = useRef<HTMLDivElement>(null);
    const ballSize = 350;
    

    useEffect(() => {
        const createBouncingBall = (ballRef: React.RefObject<HTMLDivElement>, velocityX: number, velocityY: number) => {
          const containerWidth = window.innerWidth;
          const containerHeight = window.innerHeight;
    
          let directionX = velocityX;
          let directionY = velocityY;

          gsap.set(ballRef.current, {
            x: Math.random() * (containerWidth - ballSize),
            y: Math.random() * (containerHeight - ballSize),
          });
    
          const updatePosition = () => {
            const ball = ballRef.current;
    
            if (ball) {
              const ballRect = ball.getBoundingClientRect();

              if (ballRect.left <= 0 || ballRect.right >= containerWidth) {
                directionX = -directionX; 
              }
              if (ballRect.top <= 0 || ballRect.bottom >= containerHeight) {
                directionY = -directionY; 
              }

              gsap.to(ball, {
                x: `+=${directionX}`,
                y: `+=${directionY}`,
                duration: 0.016,
                onComplete: updatePosition,
              });
            }
          };
    
          updatePosition();
        };
    
        createBouncingBall(ball1Ref, 2, 3); 
        createBouncingBall(ball2Ref, 3, 4);
        createBouncingBall(ball3Ref, 2, 2);
        createBouncingBall(ball4Ref, 3, 5);
        createBouncingBall(ball5Ref, 2, 5);
    
        const handleResize = () => {
          gsap.killTweensOf("*");
          createBouncingBall(ball1Ref, 5, 3);
          createBouncingBall(ball2Ref, 4, 4);
          createBouncingBall(ball3Ref, 6, 2);
          createBouncingBall(ball4Ref, 3, 5);
          createBouncingBall(ball5Ref, 5, 5);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
          gsap.killTweensOf("*");
        };
      }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark", !darkMode);
        localStorage.setItem("darkMode", (!darkMode).toString());
    };

    return (
        <div className={`h-screen theme-container relative ${darkMode ? 'bg-paper-dark text-dark-text' : 'bg-paper text-light-text'} flex flex-col justify-between p-20`}
            style={{
                overflow: 'hidden',
            }}
        >
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    padding: 0,
                    boxSizing: 'border-box', 
                    margin: 0,
                    width: '100vw',
                    height: '100vh',
                }}>
                <div
                    ref={ball1Ref}
                    style={{
                        width: ballSize,
                        height: ballSize,
                        background: darkMode 
                          ? "radial-gradient(circle, #808080 0%, #000000 100%)" // Gradiente de preto para cinza no dark mode
                          : "radial-gradient(circle, #FFECB3 0%, #65ebba 100%)", // Gradiente original no light mode
                        borderRadius: "50%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                />

                <div
                    ref={ball2Ref}
                    style={{
                        width: ballSize,
                        height: ballSize,
                        background: darkMode 
                          ? "radial-gradient(circle, #808080 0%, #000000 100%)" // Gradiente de preto para cinza no dark mode
                          : "radial-gradient(circle, #65ebba 0%, #f79ba4 80%)",
                        borderRadius: "50%",
                        position: "absolute",
                    }}
                />

                <div
                    ref={ball3Ref}
                    style={{
                        width: ballSize,
                        height: ballSize,
                        background: darkMode 
                          ? "radial-gradient(circle, #808080 0%, #000000 100%)" // Gradiente de preto para cinza no dark mode
                          : "radial-gradient(circle, #f79ba4 0%, #f3d783 80%)",
                        borderRadius: "50%",
                        position: "absolute",
                    }}
                />

                <div
                    ref={ball4Ref}
                    style={{
                        width: ballSize,
                        height: ballSize,
                        background: darkMode 
                          ? "radial-gradient(circle, #808080 0%, #000000 100%)" // Gradiente de preto para cinza no dark mode
                          : "radial-gradient(circle, #d992e6 0%, #FADADD 80%)",
                        borderRadius: "50%",
                        position: "absolute",
                    }}
                />

                <div
                    ref={ball5Ref}
                    style={{
                        width: ballSize - 20,
                        height: ballSize - 20,
                        background: darkMode 
                          ? "radial-gradient(circle, #808080 0%, #000000 100%)" // Gradiente de preto para cinza no dark mode
                          : "radial-gradient(circle, #65ebba 0%, #76cff8 80%)",
                        borderRadius: "50%",
                        position: "absolute",
                    }}
                />
            </div>

            <header className="relative flex justify-between z-10">
                <Link to="/br">
                    <img className="h-28" src="./logo.png" alt="Logo" />
                </Link>
                <div className="flex justify-center items-center gap-6">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Link to="/">
                            <p>EN</p>
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
                        <img src={darkMode ? "./menu-dark.png" : "./menu.png"} alt="Menu Icon" className="h-8" />
                    </motion.a>
                </div>
            </header>
            <div
                className="mouse-circle"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />

            <div className="relative flex flex-col items-center justify-center flex-grow gap-8 pb-6 z-10">
                <div className="space-y-3">
                    <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl londrina-shadow-regular text-shadow-lg">OLÁ, EU SOU </h1>
                        <h1 className="text-5xl dela-gothic-one-regular">WESLLEY OLIVEIRA</h1>
                    </motion.div>

                    <motion.div
                        className="flex justify-center gap-3"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl londrina-shadow-regular tracking-wider text-shadow-lg">
                            MAS PODE ME CHAMAR DE
                        </h1>
                        <h1 className="text-5xl dela-gothic-one-regular">WELL</h1>
                    </motion.div>

                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
                    >
                        <p className="text-3xl">Eu sou um desenvolvedor web front-end</p>
                    </motion.div>
                </div>

                <motion.div
                    className="flex gap-5 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0, duration: 0.8 }}
                >
                    <motion.a
                        href="#"
                        className="flex p-1 justify-center items-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <ArrowRight className="h-4" />
                        <p className="text-lg text-center mb-1 ml-2">ver meus projetos</p>
                    </motion.a>

                    <motion.a
                        href="#"
                        className="flex p-1 justify-center items-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <ArrowRight className="h-4" />
                        <Link to="/about-me-br" className="text-lg text-center mb-1 ml-2">sobre mim</Link>
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
}
