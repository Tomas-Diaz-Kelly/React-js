import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clearCart, removeItemFromCart } = useContext(CartContext);

  // Calcula la suma de todos los precios de los productos en el carrito
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay productos en el carrito</h1>
        <Link to="/" className="Option">Volver a Productos</Link>
      </div>
    );
  } else {
    return (
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} removeItem={removeItemFromCart} />
        ))}
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()} className="btn btn-danger mt-2">
          Limpiar carrito
        </button>
        <Link to="../checkout/checkout.js" className="btn btn-success mt-2">Ir a pagar</Link>
      </div>
    );
  }
};

export default Cart;
