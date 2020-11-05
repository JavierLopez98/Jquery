import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";

export default class DetallesDepartamento extends Component {
  constructor(props) {
    super(props);
    this.setState({
      iddept: props.iddepartamento,
    });
  }

  buscarDepartamento = () => {
    console.log(this.props.iddepartamento);
    var request = "/api/departamentos/" + this.props.iddepartamento;
    var url = Global.urlCrudDept + request;
    axios.get(url).then((res) => {
      console.log(res.data);
      this.setState({
        departamento: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.buscarDepartamento();
  };

  state = {
    departamento: {},
    status: false,
    iddept: 0,
  };

  render() {
    return (
      <div>
        <h1>Detalles de departamento</h1>
        {this.state.status && (
          <React.Fragment>
            <h1>Numero: {this.state.departamento.numero}</h1>
            <h2>Nombre: {this.state.departamento.nombre}</h2>
            <h2>Localidad: {this.state.departamento.localidad}</h2>
            <a
              href={
                "/update/" +
                this.state.departamento.numero +
                "/" +
                this.state.departamento.nombre +
                "/" +
                this.state.departamento.localidad
              }
              className="btn btn-info"
            >
              Modificar
            </a>
          </React.Fragment>
        )}
      </div>
    );
  }
}
