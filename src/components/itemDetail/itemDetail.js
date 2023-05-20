import ItemCount  from "../itemCount/itemCount";

const ItemDetail = ({id, name, img, category, description ,price, stock}) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader"> 
                    {name}
                </h2>
            </header>
           
            <section>
                <p className="Info">
                    Stock disponible: {category}
                </p><p className="Info">
                    Stock disponible: {description}
                </p><p className="Info">
                    Stock disponible: {stock}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail