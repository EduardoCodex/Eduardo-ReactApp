const datosItem = [
  {
    id: 1,
    category: "Camisas",
    title: "Camisa",
    price: 80.25,
    img: "/imgs/camisa.jpg",
    detail: "Camisa Nike",
    info: "Con más de 50 años en el mercado del calzado y ropa deportiva, Nike es considerada por un gran número de personas la marca insignia por su diseño y calidad."
  },
  {
    id: 2,
    category: "Pantalones",
    title: "Pantalon",
    price: 79.99,
    img: "/imgs/pantalon.jpg",
    detail: "Pantalon Nike",
    info: "Los Pantalones Club Fleece te ofrece una comodidad lujosa sin el bulto. Confeccionado con un suave tejido de vellón, presenta un dobladillo y puños actualizados y delgados para una apariencia limpia."
  },
  {
    id: 3,
    category: "Zapatos",
    title: "Zapatos",
    price: 125.50,
    img: "/imgs/zapatos.jpg",
    detail: "Zapatos Nike",
    info: "El calzado Air Jordan 1 Mid aporta estilo en toda la cancha y comodidad premium a un look icónico. La unidad Air-Sole amortigua el partido en las canchas, y el cuello acolchado ofrece una mayor sujeción."
  },

  {
    id: 4,
    category: "Camisas",
    title: "Camisa",
    price: 100.60,
    img: "/imgs/camiseta.jpg",
    detail: "Camisa Nike",
    info: "Con más de 50 años en el mercado del calzado y ropa deportiva, Nike es considerada por un gran número de personas la marca insignia por su diseño y calidad."
  },

  {
    id: 5,
    category: "Pantalones",
    title: "Pantalon",
    price: 82.99,
    img: "/imgs/pantalon-nike.jpg",
    detail: "Pantalon Nike",
    info: "Los Pantalones Club Fleece te ofrece una comodidad lujosa sin el bulto. Confeccionado con un suave tejido de vellón, presenta un dobladillo y puños actualizados y delgados para una apariencia limpia."
  },
  
  {
    id: 6,
    category: "Zapatos",
    title: "Zapatos",
    price: 155.50,
    img: "/imgs/zapatosAir.jpg",
    detail: "Zapatos Nike",
    info: "El calzado Air Jordan 1 Mid aporta estilo en toda la cancha y comodidad premium a un look icónico. La unidad Air-Sole amortigua el partido en las canchas, y el cuello acolchado ofrece una mayor sujeción."
  },
];

const ServiceProducto = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(datosItem);
    }, 1000);
  });
};

const MostrarProducto = (idURL) => {
  return new Promise((resolve, reject) => {
    const itemerror = datosItem.find((item) => {
      return item.id === parseInt(idURL);
    });

    setTimeout(() => {
      if (itemerror)
      resolve(itemerror);
      else
         reject("El producto no existe")
    }, 1000);
  });
};

const MostrarCategoria = (categoryURL) => {
  
  return new Promise((resolve, reject ) => {
    let categoryerror = datosItem.filter( item => item.category === categoryURL);
    setTimeout(() => {
      resolve(categoryerror)
    })
  })
}

export default ServiceProducto;
export { MostrarProducto };
export {MostrarCategoria};
