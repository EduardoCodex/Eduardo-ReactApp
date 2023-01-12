import { useState, useEffect } from "react";
import { MostrarProducto } from "../Service/mockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  let params = useParams();

  useEffect(() => {
    MostrarProducto(params.id)
      .then((respuesta) => {
        setProducto(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <ItemDetail
      title={producto.title}
      img={producto.img}
      price={producto.price}
      detail={producto.detail}
      info={producto.info}
    />
  );
}

export default ItemDetailContainer;
