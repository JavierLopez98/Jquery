import React, { Component } from 'react'

export default class Empleados extends Component {


    render() {
        return (
            <div>
                <h1>Empleados del departamento {this.props.codigo}</h1>
                <ul>
                    {this.props.empleados.map(emple=>{
                        return(<li key={emple.idEmpleado}>{emple.apellido}</li>);
                    })}
                </ul>
            </div>
        )
    }
}
