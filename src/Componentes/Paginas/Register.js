import React, {Component} from 'react'
import {InformacionPersona} from '../ComponentesFuncionales'
import Api from 'axios'

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            registros:[],
            nombre:"",
            correo:""
        }

        this.llenarCampo = this.llenarCampo.bind(this);
        this.nuevoItem = this.nuevoItem.bind(this);
    }


    async consumirApi() {

      try{
      var respuesta = await Api.get("https://pokeapi.co/api/v2/pokemon");
      console.log(respuesta.data);
      }catch(error){
        console.error(error);
        
      }
    }

    llenarCampo = (e) => {
      console.log(e.target.id)
      let id = e.target.id;
      if(id === "correo"){
        this.setState({correo:e.target.value});
      }else{
        this.setState({nombre:e.target.value});
      }
    }

    nuevoItem = (e) => {
      e.preventDefault();

      let item = {
        correo: this.state.correo,
        nombre: this.state.nombre,
        imagen: ""
      }
      console.log(item)
      this.setState({registros: this.state.registros.push(item)})
    }

    render(){
        return(
          <div className="container">
            <div className="row">
              <div className="card formulario col">
              <button onClick={this.consumirApi}  className="btn btn-primary">ConsumirApi</button>
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={this.llenarCampo} type="email" className="form-control" id="correo" aria-describedby="emailHelp" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input  onChange={this.llenarCampo} type="text" className="form-control" id="nombre" aria-describedby="emailHelp" />
      
                  </div>
                  <button onClick={this.nuevoItem} type="submit" className="btn btn-primary">Guardar</button>
                </form>
              </div>
              <div className="col">
                {
                  [this.state.registros].map((item, i) => 
                      <InformacionPersona nombre={item.nombre} correo={item.correo} />
                    
                  
                  )
                }
              </div>
            </div>
            </div>
        );
    }
}

export default Register;