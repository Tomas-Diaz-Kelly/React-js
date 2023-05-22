import { Link } from "react-router-dom"


const Item = ({ id, name, price, stock }) => {
    return (
      <article className="card">
        <header className="card-header">
          <h2 className="card-title">{name}</h2>
        </header>
  
        <section className="card-body">
          <p className="card-text">
            Precio: ${price}
          </p>
          <p className="card-text">
            Stock disponible: {stock}
          </p>
        </section>
  
        <footer className="card-footer">
          <Link to={`/item/${id}`} className="btn btn-primary">Ver detalle</Link>
        </footer>
      </article>
    );
  }
  
  export default Item;
 
  
  
  