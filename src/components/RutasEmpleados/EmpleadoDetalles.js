import React, { Component } from "react";
import Global from "./../../Global";
import axios from "axios";
export default class EmpleadoDetalles extends Component {
  //vamos a recibir props con un constructor
  constructor(props) {
    super(props);
    console.log("Props Detalle " + this.props.idempleado);
  }
  state = {
    empleado: {},
    status: false,
  };

  mostrarEmpleado = () => {
    var request = "/api/empleados/" + this.props.idempleado;
    var url = Global.urlEmpleados + request;
    axios.get(url).then((res) => {
      this.setState({
        empleado: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.mostrarEmpleado();
  };

  render() {
    return (
      <div>
        <h1>Detalles de empleado</h1>
        {this.state.status && (
          <div>
            <h1 style={{ color: "blue" }}>
              Oficio: {this.state.empleado.apellido}
            </h1>
            <h3>Oficio: {this.state.empleado.oficio}</h3>
          </div>
        )}
      </div>
    );
  }
}
