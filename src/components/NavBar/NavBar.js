import CartWidget from "./CartWidget/CartWidget" 
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return(
    
    <nav className="NavBar">
      <Link to='/'>
            <h3>Baobab</h3>
      </Link>
      <div className="Categories">
        <NavLink to={`/category/difusor`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Difusores</NavLink>
        <NavLink to={`/category/vela`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bombones</NavLink>
        <NavLink to={`/category/perfume`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Perfuminas</NavLink>
        <NavLink to={`/category/bombon`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Velas</NavLink>
      </div>
      <CartWidget />
    </nav>


  )

}   
    

export default NavBar;