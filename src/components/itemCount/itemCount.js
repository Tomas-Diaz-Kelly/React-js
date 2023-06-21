import React from 'react'
import {useState } from 'react' 





const ItemCount = ({stock,initial,onAdd}) => {
    const [quantity,setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity +1)
        }
    }
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity -1)
        }
    }
    return(

              <div className="Counter">
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-danger" onClick={decrement}>-</button>
                  <h3 className="Number mx-2">{quantity}</h3>
                  <button className="btn btn-success" onClick={increment}>+</button>
                </div>
                <div>
                  <button className="btn btn-primary mt-2" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                  </button>
                </div>
              </div>
            );
          }
          
          export default ItemCount
          
   

