import CartWidget from "./CartWidget/CartWidget" 
import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    
    <nav className="NavBar">
      <Link className="mih3" to='/'>
            <h3>Baobab</h3>
      </Link>
      <div className="Categories">
        <Link className="nav-link" to="/category/:difusor">Difusores</Link>
        <Link className="nav-link" to="/category/:vela">Velas</Link>
        <Link className="nav-link" to="/category/:perfume">Perfumes</Link>
        <Link className="nav-link" to="/category/:bombon">Bombones</Link>
        
        
      </div>
      <CartWidget />
    </nav>


  )

}   
    

export default NavBar;