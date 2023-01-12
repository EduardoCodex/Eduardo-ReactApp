import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./card.css"

function Item(props) {
    const {title, price, img, detail, id,} = props.item;

    return (
        
            <div  className ="item-card">
                <div className="item-card_header">
                    <h2>{title}</h2>
                </div>
                <div className="item-card_img">
                    <img src={img} alt={title} />
                </div>
                <div className="item-card_detail">
                    <h3 className="item-card_price">$ {price}</h3>
                    <small>{detail}</small>
                </div>
                <Link to= {`/detalle/${id}`}>
                    <Button padding="20px" color="black"> 
                    Ver detalles...
                    </Button>
                    </Link>
                <br></br>
            </div>
        
    )
}

export default Item;