import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes/RouterApp.jsx'

const router = createBrowserRouter(routes);

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
} else {
  console.error("No se encontró el elemento con id 'root'.");
}

