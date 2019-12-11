import React from   'react'
import Formulario from '../componentes/Formulario.js'
import Tarjeta from '../componentes/Tarjeta.js'
import '../componentes/estilos/EjercicioNuevo.css'

class EjercicioNuevo extends React.Component{

    state = {
        form: {
            titulo:'',
            descripcion:'',
            img:'',
            colorIzquierdo:'',
            colorDerecho:''
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state.form)
    }

    handleClick = (e)=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }            
        })
    }

    render(){
        return(
            <div className = "row ExerciseNew_Lateral_Spaces">
                <div className="col-sm ExerciseNew_Card_Space">
                    <Tarjeta {...this.state.form}/>
                </div>
                <div className="col-sm ExerciseNew_Form_Space">
                    <Formulario onChange={this.handleClick} onSubmit={this.handleSubmit}
                    form={this.state.form}/>
                </div>
            </div>
        )
    }
}

export default EjercicioNuevo