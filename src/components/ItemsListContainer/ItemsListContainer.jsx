import { useState, useEffect } from "react";
import Flex from "../Flex/Flex";
import Item from "../Card/Item";
import ServiceProducto, { MostrarCategoria }  from "../Service/mockService";
import { useParams } from "react-router-dom";


function ItemLisContainer() {
  const [ productos, setProductos] = useState( [ ] );
  let { categoryid } = useParams()

  useEffect( () => {
    if (!categoryid){
    ServiceProducto() .then((respuesta) => {
      setProductos(respuesta);
    }) .catch(error => alert(error));
  }
  else {
    MostrarCategoria(categoryid)
    .then((respuesta) => {
      setProductos(respuesta)
    })
  }
  }, [categoryid]);

    return (
      <div>
        <Flex>
          {productos.map((itemIterado) => {
            return (
              <Item
              key={itemIterado.id}
              item={itemIterado}>
                    </Item>
        );
      })}
        </Flex>
      </div>
  );
}

export default ItemLisContainer;
