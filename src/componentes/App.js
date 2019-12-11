import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Ejercicio from '../paginas/Ejercicio'
import EjercicioNuevo from '../paginas/EjercicioNuevo'
import NoEncontrado from '../paginas/NoEncontrado.js'

const App = () => (
    <BrowserRouter>
      <Switch>
          <Route exact path="/ejercicios" component ={Ejercicio}/>
          <Route exact path="/ejercicios/nuevo" component={EjercicioNuevo}/>
          <Route component = {NoEncontrado}/>

      </Switch>
        
    </BrowserRouter>
   
    
)
export default App