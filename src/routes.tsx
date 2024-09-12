import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { HomePt } from "./pages/home-in-pt";
import { AboutMe } from "./pages/about-me";

export const router = createBrowserRouter([
    {
        path: '/',
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
    
])