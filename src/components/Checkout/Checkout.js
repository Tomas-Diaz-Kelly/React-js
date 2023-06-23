import React, { useState } from 'react';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleCheckout = () => {
    // Aquí puedes realizar alguna lógica de procesamiento o envío del pedido
    console.log('Pedido realizado:', { name, email, address });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dirección de envío"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleCheckout}>Realizar pedido</button>
    </div>
  );
};

export default Checkout;
