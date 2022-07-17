import './Input.css'

function Input(props) {
    return (
        <div>
            <p>{props.title}</p>
            {/* Usando operador Spread */}
            <input {...props} />
        </div >
    )
}

export default Input