import { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { Header } from "../components/header";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface MousePosition {
    x: number;
    y: number;
}

export function Contact() {
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
    }, [ballSize]);

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
                        width: "3px", // Tamanho do ponto
                        height: "3px", // Tamanho do ponto
                        borderRadius: "50%",
                        background: darkMode ? "#fff" : "#000", // Cor do ponto
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)", // Garante que o ponto esteja no centro da bolinha
                    }}
                />
            </div>
            <div className="relative flex flex-col gap-8 z-10 h-full mt-5 ml-5 lg:mt-10 lg:ml-20">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold">CONTACT</h1>
                </div>
                <div className="h-[2px] w-[90%] bg-slate-500"></div>
                <div className="flex flex-col md:flex-row gap-10"> {/* Flex-col no mobile e flex-row em telas maiores */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-5"> {/* Flex-col no mobile para empilhar Mail e Email */}
                        <h1 className="font-extrabold text-2xl">MAIL</h1>
                        <div className="flex items-center">
                            <p>Weslleyrichardson.cg@hotmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3"> {/* Flex-col para empilhar as redes sociais */}
                        <h1 className="font-extrabold text-2xl">SOCIAL MEDIAS</h1>
                        <div>
                            <div className="flex items-center">
                                <Link
                                    to="https://www.instagram.com/weslley_olli?igsh=MXNsOGpzZ2FlN2p3cA%3D%3D&utm_source=qr"
                                    className="relative flex items-center text-xs md:text-lg whitespace-nowrap group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ArrowUpRight className="h-4 mt-0" />
                                    <p className="ml-1">Instagram</p>
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform origin-left duration-300 scale-x-0 group-hover:scale-x-105 ${darkMode ? "bg-gray-200" : "bg-slate-500"}`}
                                    ></span>
                                </Link>
                            </div>
                            <div className="flex items-center">
                                <Link
                                    to="https://www.linkedin.com/in/weslley-oliveira-5a3443238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                    className="flex text-xs md:text-lg whitespace-nowrap relative group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ArrowUpRight className="h-4 mt-0 lg:mt-1.5" />
                                    <p className="ml-1">Linkedin</p>
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform origin-left duration-300 scale-x-0 group-hover:scale-x-105 ${darkMode ? "bg-gray-200" : "bg-slate-500"}`}
                                    ></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}