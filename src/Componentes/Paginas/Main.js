import React,{Component} from 'react'
import {Route, BrowserRouter as Router}  from 'react-router-dom'
import Inicio from './Inicio'
import Register from './Register'
import Practica from"./Practica"

const Navegacion = (
  <Router>
    <Route path="/Login" component={Inicio} />
    <Route path="/Registro" component={Register} />
    <Route path="/Practica" component={Practica} />
  </Router>
)

class Main extends Component{

    render(){
      return (
        <div className="main-container">
           {
             Navegacion
           }
        </div>
      )
    }
}

export default Main;