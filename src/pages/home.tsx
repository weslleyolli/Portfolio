import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from 'gsap';
import { Header } from "../components/header";
import { AnimatedLink } from "../components/animated-link";

interface MousePosition {
    x: number;
    y: number;
}

export function Home() {
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
    const isMobile = window.innerWidth < 640; // Define a condição para mobile
    const ballSize = isMobile ? 150 : 300;

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
        <div className={`h-screen theme-container relative ${darkMode ? 'bg-paper-dark text-dark-text' : 'bg-paper text-light-text'}flex flex-col justify-between p-10 md:p-20`}
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
                            ? "radial-gradient(circle, #808080 0%, #000000 100%)"
                            : "radial-gradient(circle, #FFECB3 0%, #65ebba 100%)",
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
                            ? "radial-gradient(circle, #808080 0%, #000000 100%)"
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
                            ? "radial-gradient(circle, #808080 0%, #000000 100%)"
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
                            ? "radial-gradient(circle, #808080 0%, #000000 100%)"
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
                            ? "radial-gradient(circle, #808080 0%, #000000 100%)"
                            : "radial-gradient(circle, #65ebba 0%, #76cff8 80%)",
                        borderRadius: "50%",
                        position: "absolute",
                    }}
                />
            </div>
            <Header darkMode={darkMode} toggleTheme={toggleTheme} />
            <div
                className="mouse-circle hidden md:block" // Esconde no tablet e mobile (md: 768px)
                style={{
                    position: "absolute",
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: "20px",  // Ajuste conforme necessário
                    height: "20px", // Ajuste conforme necessário
                    borderRadius: "50%",
                    background: "transparent", // Cor da bolinha do mouse
                    pointerEvents: "none", // Previne interação com o mouse
                    transform: "translate(-50%, -50%)", // Centraliza a bolinha no ponto do mouse
                }}
            >
                <div
                    className="center-point"
                    style={{
                        width: "2px", // Tamanho do ponto
                        height: "2px", // Tamanho do ponto
                        borderRadius: "50%",
                        background: darkMode ? "#fff" : "#000", // Cor do ponto
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)", // Garante que o ponto esteja no centro da bolinha
                    }}
                />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-grow gap-8 pb-6 z-10 h-full">
                <div className="space-y-3">
                    <motion.div
                        className="flex flex-col items-center md:flex-row md:items-start gap-0 md:gap-3"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-3xl md:text-5xl londrina-shadow-regular text-shadow-lg text-center">
                            HEY, I'M
                        </h1>
                        <motion.h1
                            className="text-2xl md:text-5xl dela-gothic-one-regular whitespace-nowrap"
                            whileHover={{ scale: 1.02 }} // Leve efeito de escala no hover
                        >
                            WESLLEY OLIVEIRA
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center md:flex-row md:items-start gap-0 md:gap-3"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 className="text-2xl md:text-5xl londrina-shadow-regular tracking-wider text-shadow-lg text-center">
                            BUT YOU CAN CALL ME
                        </h1>
                        <motion.h1
                            className="text-2xl md:text-5xl dela-gothic-one-regular text-center"
                            whileHover={{ scale: 1.05 }} // Leve efeito de escala no hover
                        >
                            WELL
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
                    >
                        <p className="text-lg md:text-3xl">
                            I'm a front-end web developer
                        </p>
                    </motion.div>
                </div>
                <div className="flex gap-5 mt-6">
                    <AnimatedLink to="/projects" text="see my projects" darkMode={darkMode} />
                    <AnimatedLink to="/about-me" text="more about me" darkMode={darkMode} />
                </div>
            </div>
        </div>
    );
}
