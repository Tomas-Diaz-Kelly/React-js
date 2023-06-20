import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay productos en el carrito</h1>
        <Link to='/' className='Option'>Volver a Productos</Link>
      </div>
    );
  } else {
    return (
      <div>
        {cart.map(prod => (
          <CartContext key={prod.id} {...prod} />
        ))}
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()} className="Button">
          Limpiar carrito
        </button>
        <Link to='/' className='Option'>Ir a pagar</Link>
      </div>
    );
  }
};

export default Cart;
