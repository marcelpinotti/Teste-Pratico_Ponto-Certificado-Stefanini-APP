import ImgDsDark from "../../assets/img/logo-azul.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to="/">
                        <img className="img" src={ImgDsDark} alt="PontoCertificado" width="140"/>
                    </Link>
                    <Link to="/">
                        <a> HOME </a>
                    </Link>
                    <Link to="/cadastro">
                        <a> CADASTRO </a>
                    </Link>
                    <Link to="/busca">
                        <a> BUSCA </a>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;