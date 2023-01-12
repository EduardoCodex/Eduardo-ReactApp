import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import HomePages from "./pages/HomePages";

function App() {
  return (
    <BrowserRouter>
    <NavBar />

      <Routes>
            <Route path="/" element = { <HomePages />} />
            <Route path="/category/:categoryid" element = { <ItemsListContainer/> } />
            <Route path="/detalle/:id" element = { <ItemDetailContainer/> } />
      </Routes>

    </BrowserRouter>
  );
}

export default App