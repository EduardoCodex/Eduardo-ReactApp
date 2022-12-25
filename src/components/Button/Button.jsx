import "./button.css"

export default function Button (props) {
    
    const styleButton = {
        padding: props.padding,
        backgroundColor: props.color,
    }
    return (
        <button style={styleButton} className="btn">{props.text}</button>
    );
}