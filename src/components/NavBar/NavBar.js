import CartWidget from "./CartWidget/CartWidget" 
import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    
    <nav className="NavBar">
      <Link to='/'>
            <h3>Baobab</h3>
      </Link>
      <div className="Categories">
        <Link to={`/category/difusor`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Difusores</Link>
        <Link to={`/category/vela`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bombones</Link>
        <Link to={`/category/perfume`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Perfuminas</Link>
        <Link to={`/category/bombon`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Velas</Link>
      </div>
      <CartWidget />
    </nav>


  )

}   
    

export default NavBar;