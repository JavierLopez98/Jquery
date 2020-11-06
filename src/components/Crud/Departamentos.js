import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";

export default class Departamentos extends Component {
  state = {
    departamentos: [],
    status: false,
  };

  cargarDepartamentos = () => {
    var request = "/api/departamentos";
    var url = Global.urlCrudDept + request;
    axios.get(url).then((res) => {
      this.setState({
        departamentos: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarDepartamentos();
  };

  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        {this.state.status && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Número</th>
                <th>Nombre</th>
                <th>Localidad</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {this.state.departamentos.map((dept, i) => {
                return (
                  <tr key={i}>
                    <td>{dept.numero}</td>
                    <td>{dept.nombre}</td>
                    <td>{dept.localidad}</td>
                    <td>
                      <a href={"/details/" + dept.numero}>Detalles</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}