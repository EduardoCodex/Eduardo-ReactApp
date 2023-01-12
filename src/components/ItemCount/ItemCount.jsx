import { useState } from 'react'
import "./ItemCount.css"


function ItemCount(props) {
    const [count, setCount] = useState(1);
    let stock = 8;

    function handleAdd() {
        setCount( count +1 )
    }

    function handleSubtrac() {
        setCount( count -1)
    }

  return (
    <div className='item-button'>
        <p className='button-name'>Cantidad de unidades</p>
        <button className='button-count' disabled={count === 1} onClick={handleSubtrac}>-</button>
        <p>{count}</p>
        <button className='button-count' disabled={count === stock } onClick={handleAdd}>+</button>
        <button className='btnComprar'>Comprar</button>
    </div>
  )
}

export default ItemCount