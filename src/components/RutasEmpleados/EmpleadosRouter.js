import React, { Component } from "react";
import Global from "./../../Global";
import axios from "axios";

export default class EmpleadosRouter extends Component {
  state = {
    empleados: [],
    status: false,
  };

  cargarEmpleados = () => {
    var request = "api/Empleados";
    var url = Global.urlEmpleados + request;
    axios.get(url).then((res) => {
      this.setState({
        empleados: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarEmpleados();
  };

  render() {
    return (
      <div>
        <h1>Rutas empleados</h1>
        <ul>
          {this.state.status &&
            this.state.empleados.map((emp, i) => {
              return (
                <li key={i}>
                  {emp.apellido}
                  <a href={"/empleadosdetalle/" + emp.idEmpleado}>Detalles</a>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
