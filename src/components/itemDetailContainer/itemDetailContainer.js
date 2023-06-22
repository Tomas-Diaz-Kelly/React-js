import { useState, useEffect } from "react"
import ItemDetail from "../itemDetail/itemDetail"
import { useParams } from "react-router-dom"
import { getItemData } from "../../services/firebase"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getItemData(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])
    return(
        <div className="ItemDetailContainer"> 
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailContainer