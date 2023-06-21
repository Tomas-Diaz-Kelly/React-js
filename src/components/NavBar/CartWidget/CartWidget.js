import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import cartImage from "./assets/cart-canasto.png";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const quantityStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25px",
    height: "25px",
    backgroundColor: "green",
    color: "white",
    borderRadius: "50%",
    fontSize: "18px",
    marginLeft: "5px",
  };

  const cartWidgetStyles = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  };

  if (totalQuantity === 0) {
    return null; 
  }

  return (
    <Link to="/cart" className="CartWidget" style={cartWidgetStyles}>
      <img src={cartImage} alt="cart-widget" />
      <div style={quantityStyles}>{totalQuantity}</div>
    </Link>
  );
};

export default CartWidget;
