import React from 'react'

class Formulario extends React.Component{
    
    render(){
        const {onChange, onSubmit, form}= this.props
        return(
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" onChange={onChange} className="form-control" placeholder="Titulo"
                    name="titulo" value={form.titulo}/>
                </div>

                <div className="form-group">
                    <input type="text" onChange={onChange} className="form-control" placeholder="descripcion"
                    name="descripcion" value={form.descripcion}/>
                </div>

                <div className="form-group">
                    <input type="text" onChange={onChange} className="form-control" placeholder="img"
                    name="imagen" value={form.img}/>
                </div>

                <div className="form-group">
                    <input type="text" onChange={onChange} className="form-control" placeholder="colorIzquierdo"
                    name="Color Izquierdo" value={form.coloeIzquierdo}/>
                </div>

                <div className="form-group">
                    <input type="text" onChange={onChange} className="form-control" placeholder="colorDerecho"
                    name="Color Derecho" value={form.colorDerecho}/>
                </div>
                <button type="submit" className="btn btn-primary float-right">
                    Enviar
                </button>
            </form>
        )
    }
}
export default Formulario