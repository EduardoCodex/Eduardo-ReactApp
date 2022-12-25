import './App.css';
import Card from "./components/Card"
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import NavBar from './components/NavBar/NavBar';



function App() {

  const css = {
    backgroundColor: "pink",
    margin: "30px",
    padding: "50px",
    textAling: "center",
  };
  
  return (
    <div className='App'>
         
        <NavBar/>
        <ItemsListContainer texto="Tienda Virtual"/>
          <div style={css} className="catalogo">
          <Card img="/imgs/camisa.jpg" 
          title="Camisa" 
          price="250" 
          detail="La camisa de Nike"
          />
          <Card  img="/imgs/pantalon.jpg"
           title="Pantalon"
           price="100" 
           detail="El Pantalon de Nike"
           />
          <Card  img="/imgs/zapatos.jpg" 
          title="Zapato" 
          price="325" 
          detail="Los Zapatos de Nike"
          />
          </div>
    </div>
  );
}


export default App;
