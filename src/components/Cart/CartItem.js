/*import React from "react";

const CartItem = ({ item }) => {
  const { name, price, quantity } = item;

  return (
    <div className="CartItem">
      

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
*/

/*
import React from "react";

const CartItem = ({ item, removeItem }) => {
  const { id, name, price, quantity } = item;

  const handleRemove = () => {
    removeItem(id);
  };

  return (
    <div className="CartItem">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
              <button onClick={handleRemove}>Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
*/

import React from "react";

const CartItem = ({ item, removeItem }) => {
  const { id, name, price, quantity } = item;

  return (
    <div className="CartItem">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar linea</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
              <button className="btn btn-danger mt-2" onClick={() => removeItem(id)}>Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartItem;
