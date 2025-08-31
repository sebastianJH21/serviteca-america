import { createBrowserRouter } from "react-router-dom";
import App from "../App"; 
import Home from "../pages/home/Home";
// import About from "../pages/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/404/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { index: true, element: <Home /> },   
    //   { path: "about", element: <About /> }, 
      { path: "contacto", element: <Contact /> }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
