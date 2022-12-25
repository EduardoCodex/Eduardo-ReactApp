export default function CartWidget() {
    const mostrarAlerta=()=>{
        alert("¡BIENVENIDOS AL CARRITO DE COMPRAS! 💘")
    }
  
    return (
        <div>
        <button className="btn-navbar" onClick={()=>mostrarAlerta()}>🛒</button>
        </div>
        )
    }