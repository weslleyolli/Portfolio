import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { HomePt } from "./pages/home-in-pt";
import { AboutMe } from "./pages/about-me/about-me";
import { AboutMePt } from "./pages/about-me-pt/about-me-pt";
import { Projects } from "./pages/projects/projects";
import { ProjectsBr } from "./pages/projects-pt/projects-pt";
import { Menu } from "./pages/menu";
import { MenuPt } from "./pages/menu-pt";
import { LanguageSwitcher } from "./components/language-switcher";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LanguageSwitcher />,
    },
    {
        path: '/en',
        element: <Home />,
    },
    {
        path: '/br',
        element: <HomePt />,
    },
    {
        path: '/about-me',
        element: <AboutMe />,
    },
    {
        path: '/about-me-br',
        element: <AboutMePt />,
    },
    {
        path: '/projects',
        element: <Projects />,
    },
    {
        path: '/projects-br',
        element: <ProjectsBr />,
    },
    {
        path: '/menu',
        element: <Menu />,
    },
    {
        path: '/menu-br',
        element: <MenuPt />,
    },

    {
        path: '/language',
        element: <LanguageSwitcher />,
    },
    
])