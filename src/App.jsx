import { Outlet, Link } from "react-router-dom";
import "./App.jsx"; 
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
