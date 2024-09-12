import { router } from "./routes";
import "./styles.css";
import { RouterProvider } from 'react-router-dom'

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
