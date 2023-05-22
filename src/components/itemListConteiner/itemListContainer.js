import { useState, useEffect } from "react";
import {getProducts,getProductsByCategory} from '../../asyncMock'
import ItemList from "../itemList/itemList";
import { useParams } from "react-router-dom";



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const  {categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        asyncFunc(categoryId) 
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })

    }, [categoryId])

    return(
        <div>
            <h1 className="text-md-start btn-beige" >{greeting} Vea los productos disponibles</h1>
            <figure class="text-start">
                <blockquote class="blockquote">
                    <p>Productos 100% artesanales</p>
                </blockquote>
        <figcaption class="blockquote-footer">
                Contactate con nosotros 
        </figcaption>
</figure>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;