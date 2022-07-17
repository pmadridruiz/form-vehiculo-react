import Input from "../Input/Input"
import Select from "../Select/Select"
import Button from "../Button/Button"
import './Formulario.css'
import { useState } from 'react'



function Formulario(props) {

    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [patente, setPatente] = useState('')
    const [anio, setAnio] = useState('')
    const [showData, setShowData] = useState(false)

    let marcas = [{ name: 'Toyota', id: 1 }, { name: "Nissan", id: 2 }, { name: "BMW", id: 3 }]
    let modelos = [{ name: 'Trueno-AE86', id: 1 }, { name: "Tiida", id: 2 }, { name: "E46", id: 3 }]


    let handleChangePatente = (event) => {
        // console.log(event.target.value)
        setPatente(event.target.value)
    }

    let handleChangeAnio = (event) => {
        // console.log(event.target.value)
        setAnio(event.target.value)
    }

    let handleChangeMarca = (event) => {
        // console.log(event.target.value)
        setMarca(event.target.value)
    }

    let handleChangeModelo = (event) => {
        // console.log(event.target.value)
        setModelo(event.target.value)
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        event.target.reset()
        console.log(`
        Patente: ${patente} 
        Año: ${anio}
        Marca: ${marca}
        Modelo: ${modelo}
        `)
        setShowData(true)
    }

    return (
        <div className="form">
            <form name="formulario " onSubmit={enviarDatos} onChange={() => { if (showData) setShowData(false) }}>
                <h1>INGRESE DATOS DEL VEHÍCULO</h1>
                <Input placeholder="LW4523" title="Ingrese Patente" type="text" onChange={handleChangePatente} />
                <Input placeholder="2005" title="Ingrese Año" type="number" onChange={handleChangeAnio} />
                <Select
                    change={handleChangeMarca}
                    name="Marca"
                    items={marcas}
                />

                <Select
                    change={handleChangeModelo}
                    name="Modelo"
                    items={modelos}
                />

                <Button type="submit" />

                <br></br>

                {/* usando operador ternario */}

                {showData ? <h2>
                    <p>Patente: {patente}</p>
                    <p>Año: {anio}</p>
                    <p>Marca: {marca}</p>
                    <p>Modelo: {modelo}</p>
                </h2> : <p>No ingresó datos.</p>}

            </form>
        </div >
    )
}

export default Formulario