import Button from "./Button/Button";

function Card(props) {
    console.log(props)
    return (
        <>
            <div>
                <h3>{props.title}</h3>
                <br/>
                <img height="300px" src={props.img} alt={props.title} />
                <h3>${props.price}</h3>
                <small>{props.detail}</small>
                <Button padding="20px" color="red" text="Comprar"/>
            </div>
        </>
    )
}

export default Card;