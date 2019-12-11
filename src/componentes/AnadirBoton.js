import React from 'react'
import {Link} from 'react-router-dom'
import './estilos/AnadirBoton.css'
import botonImg from '../imagenes/AnadirBoton.png'

const AnadirBoton = () => (
    <Link to="/ejercicios/nuevo">
        <img src ={botonImg} alt="" className="Fitness-Add"/>
    </Link>    
)

export default AnadirBoton