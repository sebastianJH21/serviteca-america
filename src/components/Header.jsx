import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    const closeNavbar = () => {
        document.getElementById('btn-toggler').click();
    }
    return (
        <>
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="btn-toggler">
                        <span className=""><i className="fa fa-bars" aria-hidden="true"></i></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <NavLink to={'/'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={closeNavbar}>
                                <span className="nav-link">Inicio<span className="sr-only">(current)</span></span>
                            </NavLink>
                            <NavLink to={'/nosotros'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={closeNavbar}>
                                <span className="nav-link">Nosotros</span>
                            </NavLink>
                            <NavLink to={'/'} onClick={closeNavbar}>
                                <span className="nav-link navbar-brand"> <span><span><img src="images/logo.png" alt="" /></span></span></span>
                            </NavLink>
                            <NavLink to={'/servicios'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={closeNavbar}>
                                <span className="nav-link">Servicios</span>
                            </NavLink>
                            <NavLink to={'/contacto'} className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} onClick={closeNavbar}>
                                <span className="nav-link">Contacto</span>
                            </NavLink>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <section className="banner_section layout_padding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="banner_slider" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="banner_taital_main">
                                            <h1 className="banner_taital">Atención personalizada</h1>
                                            <p className="banner_text">Cada cliente y cada vehículo es único, y así los tratamos. Nos enfocamos en escuchar tus necesidades, asesorarte y brindarte soluciones a la medida, asegurando que siempre salgas con la tranquilidad de haber recibido el mejor servicio.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="banner_taital_main">
                                            <h1 className="banner_taital">Transparencia<br /> y confianza</h1>
                                            <p className="banner_text">En nuestro taller creemos que la confianza se gana con claridad. Por eso explicamos cada reparación al detalle: qué falla tiene tu vehículo, por qué ocurrió y cómo puedes prevenirlo en el futuro. Aquí no hay sorpresas, solo honestidad y seguridad para ti.</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="banner_taital_main">
                                            <h1 className="banner_taital">Transparencia<br /> y confianza</h1>
                                            <p className="banner_text">En nuestro taller creemos que la confianza se gana con claridad. Por eso explicamos cada reparación al detalle: qué falla tiene tu vehículo, por qué ocurrió y cómo puedes prevenirlo en el futuro. Aquí no hay sorpresas, solo honestidad y seguridad para ti.</p>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a className="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;