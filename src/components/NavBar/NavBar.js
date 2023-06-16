import CartWidget from "./CartWidget/CartWidget" 
import { Link } from "react-router-dom";




const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-beige"> 
      <Link className="navbar-brand" to="/">
        <h3>Baobab</h3>
      </Link>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/category/difusor">Difusores</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/vela">Velas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/perfume">Perfumes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/bombon">Bombones</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;