import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface MousePosition {
    x: number;
    y: number;
}

export function AboutMe() {
    const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

    const [darkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("darkMode");
        return savedTheme === "true";
    });

    const handleMouseMove = (event: MouseEvent) => {
        setPosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className={`h-screen theme-container relative ${darkMode ? 'bg-paper-dark text-dark-text' : 'bg-paper text-light-text'} flex flex-row justify-between p-20`}>
            <div className="w-2/3 flex flex-col">
                <header className="flex justify-start">
                    <Link to="/">
                        <img className="h-28" src="./logo.png" alt="Logo" />
                    </Link>
                </header>
                <div
                    className="mouse-circle"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                    }}
                />
                <div className="space-y-4 pl-40 pt-12">
                    <h1 className="text-5xl font-medium inline-block transform scale-x-90 -tracking-widest">A
                        <span> </span>
                        <span className="inline-block font-bold transform scale-x-150 tracking-wider">B</span>OUT
                    </h1>
                    <div className="h-[2px] w-full bg-white"></div>
                    <p className="text-xl max-w-2xl font-medium playpen-regular">
                        Hi, my name is Weslley Oliveira! I'm really like about programming and love diving into new technologies.
                        I’m always eager to learn and explore the latest innovations in the tech world. Whether it's coding or trying out new tools,
                        I enjoy the process of solving problems and improving my skills along the way.
                        I'm constantly on the lookout for new challenges and opportunities to grow as a developer.
                    </p>


                    <motion.a
                        href="#"
                        className="flex items-center w-fit space-x-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Link to="/resume" className=" flex items-center space-x-2 " >
                            <ArrowRight className="h-6" />
                            <p className="text-xl font-semibold inline-block transform scale-x-90 tracking-widest playpen-regular">
                                re<span className="inline-block font-bold transform scale-x-150 tracking-wider">s</span>ume
                            </p>
                        </Link>
                    </motion.a>
                </div>
            </div>

            <div className="absolute top-0 right-0 p-4 z-10">
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

            {/* Imagem posicionada fora do fluxo com position: fixed */}
            <div className="fixed top-0 right-0 w-auto h-full image">
                <img
                    src="./perfil.jfif"
                    alt="Profile"
                    className="h-[88%] object-cover rounded-bl-[45px]"
                />
            </div>
        </div>
    );
}
