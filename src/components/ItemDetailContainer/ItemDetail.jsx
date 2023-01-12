import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({title, img, price,  info}) {
  return (
    <div  className ="itemCard-Detail">

    <div className="itemCard_img">
        <img className='CardImg' src={img} alt={title} />
    </div>
    <div className="itemCard_title">
    <h2 className='CardTitle'>{title}</h2>
        <small className='cardInfo'>{info}</small>
        <h3 className="itemCard_price">$ {price}</h3>
        <ItemCount className="card-btn" />
    </div>
</div>

  )
}

export default ItemDetail