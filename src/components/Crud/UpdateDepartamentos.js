import React, { Component } from "react";

export default class UpdateDepartamentos extends Component {
  render() {
    return (
      <div>
        <h1>
          Modificar departamento {this.props.iddepartamento},{" "}
          {this.props.nombre}, {this.props.localidad}
        </h1>
      </div>
    );
  }
}
