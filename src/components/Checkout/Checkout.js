import React, { useContext, useState } from 'react';
import { createOrder } from '../../services/firebase';
import Swal from 'sweetalert2';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const {cart , clearCart} = useContext(CartContext)
  


  
 




    const handleCheckout = async (e) => {
      e.preventDefault();
    const order = {
      items: cart,
      buyer: {
        name: {name},
        email: {email},
        address: {address},
        phone: {phone},
      },
    };

    try {
      const orderId = await createOrder(order);
      console.log('Pedido realizado:', { orderId, ...order.buyer });
      Swal.fire({
        icon: 'success',
        title: '¡Pedido realizado!',
        text: `Tu número de orden de compra es: ${orderId}`,
        confirmButtonText: 'Aceptar'
      });
      clearCart();
    } catch (error) {
      console.error('Error al realizar el pedido:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error al realizar el pedido',
        text: 'Ha ocurrido un problema al realizar tu pedido. Por favor, intenta nuevamente.',
        confirmButtonText: 'Aceptar'
      });
    }
  };
  return (
    <div className="checkout-form">
      <h2 className="checkout-title">Checkout</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="form-input"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            className="form-input"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Teléfono
          </label>
          <input
            id="phone"
            type="text"
            className="form-input"
            placeholder="Ingresa tu teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Dirección de envío
          </label>
          <input
            id="address"
            type="text"
            className="form-input"
            placeholder="Ingresa tu dirección de envío"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="checkout-button" onClick={handleCheckout}>
          Realizar pedido
        </button>
        
      </form>

      <style jsx>{`
        .checkout-form {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #fff;
        }

        .checkout-title {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-label {
          display: block;
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .form-input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .checkout-button {
          display: block;
          width: 100%;
          padding: 10px;
          font-size: 18px;
          font-weight: bold;
          color: #fff;
          background-color: #007bff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};



export default Checkout;
