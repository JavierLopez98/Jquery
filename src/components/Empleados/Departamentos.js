import React, { Component } from 'react'
import Empleados from './Empleados';
import axios from 'axios';
import Global from './../../Global';

export default class Departamentos extends Component {

    selectOpcionesRef=React.createRef();
    state={
        departamento:[]
        ,status:false
        ,deptelegido:0
        ,empleados:[]
        ,pulsado:false
    }
    cambiaElegido=()=>{
        this.setState({
            deptelegido:this.selectOpcionesRef.current.value
            ,pulsado:false
        });
    }

    
    buscaEmpleados=e=>{
        e.preventDefault();
        console.log(this.state.deptelegido);
        var request="api/Empleados/EmpleadosDepartamento/"+this.state.deptelegido
        axios.get(Global.urlEmpleados+request).then(res=>{
            this.setState({
                empleados:res.data
                ,pulsado:true
            });
            console.log(res.data);
        });
    }

    cargaDept=()=>{
        var request="api/departamentos";
        axios.get(Global.urlDepartamentos+request).then(res=>{
            console.log("dentro");
            this.setState({
                departamento:res.data
                ,status:true
            });
            
        });

    }

    componentDidMount=()=>{
        this.cargaDept();
        console.log(this.selectOpcionesRef.current.value);
    }

    render() {
        return (
            <div>
                <form>
                    <label>Departamentos: </label>
                    <select name="selectopciones"ref={this.selectOpcionesRef} onChange={this.cambiaElegido}>
                    <option value="" selected disabled hidden>Departamentos</option>
                        {this.state.status && this.state.departamento.map(dept=>{
                            return(<option value={dept.Numero}>{dept.Nombre}</option>)
                        })}</select>
                    <button onClick={this.buscaEmpleados}>Buscar empleados</button>
                </form>
                {this.state.pulsado && <Empleados codigo={this.state.deptelegido} empleados={this.state.empleados}/>}
                
            </div>
        )
    }
}
