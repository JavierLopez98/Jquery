import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import {Redirect} from 'react-router-dom';

export default class DeleteDepartamento extends Component {

    state={status:false}

    eliminarDepartamento=()=>{
        var request="/api/departamentos/"+this.props.iddepartamento;
        var url=Global.urlCrudDept+request;
        axios.delete(url).then(res=>{
            this.setState({
                status:true
            });
        });
    }

    volver=()=>{
       this.setState({
           status:true
       })
    }

    render() {

        if(this.state.status){
            return <Redirect to="/"/>
        }
        return (
            <div style={{color:"red"}}>
                <h1>¿Desea eliminar el departamento {this.props.iddepartamento}?</h1>
                <button onClick={this.eliminarDepartamento}
                className="btn btn-danger">Aceptar</button>
                <button className="btn btn-success" onClick={this.volver}>Cancelar</button>
            </div>
        )
    }
}
