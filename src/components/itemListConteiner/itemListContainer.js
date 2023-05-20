import { useEffect, useState } from "react";
import {getProducts} from '../../asyncMock'
import ItemList from "../itemList/itemList";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })

    }, [])

    return(
        <div>
            <h1 class="bg-secondary" >{greeting}</h1>\
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;