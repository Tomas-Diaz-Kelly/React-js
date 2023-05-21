import { Link } from "react-router-dom"

const Item = ({id, name, price, stock}) => {
    
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader"> 
                    {name}
                </h2>
            </header>
            
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option"> Ver detalle</Link>
            </footer>
        </article>
        
    )
}

export default Item