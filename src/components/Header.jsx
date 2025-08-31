import './Header.css';
import { NavLink  } from 'react-router-dom';

function Header() {
    return (
        <header className="header_section">
            <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <NavLink  to={'/'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <span className="nav-link">Inicio<span className="sr-only">(current)</span></span>
                            </NavLink>
                            <NavLink  to={'/nosotros'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <span className="nav-link">Nosotros</span>
                            </NavLink>
                            <NavLink  to={'/'} >
                                <span className="nav-link navbar-brand"> <span><span><img src="images/logo.png" alt="" /></span></span></span>
                            </NavLink>
                            <NavLink  to={'/servicios'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <span className="nav-link">Servicios</span>
                            </NavLink>
                            <NavLink  to={'/contacto'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                <span className="nav-link">Contacto</span>
                            </NavLink>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;