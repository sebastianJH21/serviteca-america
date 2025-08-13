import './Header.css';
import { Link } from 'react-router-dom';

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
                            <Link to={'/'} className="nav-item active">
                                <span className="nav-link" >Home <span className="sr-only">(current)</span></span>
                            </Link>
                            <Link to={'/'} className="nav-item">
                                <span className="nav-link"> About</span>
                            </Link>
                            <Link to={'/'} className="nav-item">
                                <span className="nav-link navbar-brand"> <span><span><img src="images/logo.png" alt="" /></span></span></span>
                            </Link>
                            <Link to={'/'} className="nav-item">
                                <span className="nav-link">Servicios</span>
                            </Link>
                            <Link to={'/'} className="nav-item">
                                <span className="nav-link">Contact </span>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;