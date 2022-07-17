
function Select(props) {
    return (
        <div>
            <p>Seleccionar {props.name}</p>
            <select defaultValue={""} onChange={(event) => props.change(event)}>
                <option hidden disabled value={""}>Seleccione {props.name}</option>
                {props.items.map(items => {
                    return (<option key={items.id}>{items.name}</option>)
                })}
            </select>
        </div>
    )
}

export default Select