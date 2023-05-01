import CartWidget from "./CartWidget/CartWidget" 


const NavBar = () => {
  return(
    
    <nav>
    <h3 class="display-1 bg-primary text-light">Baobab</h3>
      <div>
        <button class="btn btn-primary">Difusores</button>
        <button class="btn btn-primary">Bombones</button>
        <button class="btn btn-primary">Perfuminas</button>
        <button class="btn btn-primary">Velas</button>
      </div>
      <CartWidget />
    </nav>


  )


}   
    

export default NavBar;