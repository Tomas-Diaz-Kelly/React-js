import ItemCount  from "../itemCount/itemCount";



const ItemDetail = ({ id, name, category, description, price, stock }) => {
    return (
      <article className="card">
        <header className="card-header">
          <h2 className="card-title">{name}</h2>
        </header>
  
        <section className="card-body">
          <p className="card-text">
            Categoria: {category}
          </p>
          <p className="card-text">
            Descripcion: {description}
          </p>
          <p className="card-text">
            Precio: ${price}
          </p>
          <p className="card-text">
            Stock disponible: {stock}
          </p>
        </section>
  
        <footer className="card-footer">
          <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
        </footer>
      </article>
    );
  }
  
  export default ItemDetail;