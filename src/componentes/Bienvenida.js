import React from 'react'
import './estilos/Bienvenida.css'

const Bienvenida =({usuario, mensaje}) =>{
    return (
        <div ClassName="container">
        <div className="Fitness-User-Info">
            <h1>Hola {usuario}</h1>
            <p>{mensaje}</p>
        </div>        
     </div>

    )
    
}
export default Bienvenida