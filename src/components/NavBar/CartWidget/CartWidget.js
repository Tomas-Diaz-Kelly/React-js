/*import cart from "./assets/cart-canasto.png";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart" className="CartWidget" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
      <img src={cart} alt="cart-widget" />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
*/

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.length;

  return (
    <Link to="/cart" className="CartWidget" style={{ display: totalQuantity > 0 ? "block" : "none" }}>
      <img src={cart} alt="cart-widget" />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;
