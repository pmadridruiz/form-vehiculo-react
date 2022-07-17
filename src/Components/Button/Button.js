import './Button.css'

function Button(props) {
    return (
        <div>
            <button type={props.type}>Enviar</button>
        </div>
    )
}

export default Button