import React, { Component } from "react";
import axios from 'axios';
import Global from './../../Global';
import {Redirect} from 'react-router-dom';


export default class UpdateDepartamentos extends Component {

  cajaNumeroRef=React.createRef();
  cajaNombreRef=React.createRef();
  cajaLocalidadRef=React.createRef();

  modificarDepartamento=(e)=>{
    e.preventDefault();
    var num=parseInt(this.cajaNumeroRef.current.value);
    var nom=this.cajaNombreRef.current.value;
    var loc=this.cajaLocalidadRef.current.value;
    var dept={
      numero:num
      ,nombre:nom
      ,localidad:loc
    }
    var request="/api/departamentos";
    var url=Global.urlCrudDept+request;
    axios.put(url,dept).then(res=>{
      this.setState({
        status:true
      });
    });

  }

  state={status:false}

  render() {
    if(this.state.status) {
      return<Redirect to="/"/>;
    }
    return (
      <div>
        <h1>
          Modificar departamento
        </h1>
        <form onSubmit={this.modificarDepartamento}>
          <label>Número: </label>
          <input type="number" name="cajanumero" ref={this.cajaNumeroRef} defaultValue={this.props.iddepartamento} />
          <br/>
          <label>Nombre: </label>
          <input type="text" name="cajanombre" ref={this.cajaNombreRef} defaultValue={this.props.nombre} />
          <br/>
          <label>Localidad: </label>
          <input type="text" name="cajalocalidad" ref={this.cajaLocalidadRef} defaultValue={this.props.localidad} />
          <br/>
          <button className="btn-info">Modificar</button>
        </form>
      </div>
    );
  }
}
