import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from "../itemList/itemList";
import { useParams } from "react-router-dom";
import { getCategoryData } from "../../services/firebase";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (categoryId) {
          response = await getCategoryData(getProductsByCategory, categoryId);
        } else {
          response = await getCategoryData(getProducts);
        }
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h1 className="text-md-start btn-beige">{greeting} Vea los productos disponibles</h1>
      <figure className="text-start">
        <blockquote className="blockquote">
          <p>Productos 100% artesanales</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Contactate con nosotros
        </figcaption>
      </figure>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
