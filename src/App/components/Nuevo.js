import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Global from "./../../Global";

export default class Nuevo extends Component {
  state = { series: [], status: false, seleccionado: {}, insertado: false };

  cajaImagenRef = React.createRef();
  cajaNombreRef = React.createRef();

  componentDidMount = () => {
    this.cargaSeries();
  };

  cargaSeries = () => {
    var request = "/api/Series";
    var url = Global.url + request;
    axios.get(url).then((res) => {
      console.log(res.data);
      this.setState({
        series: res.data,
        status: true,
      });
    });
  };
  cambio = (event) => {
    this.setState({
      seleccionado: event.target.value,
    });
  };

  nuevoPj = (e) => {
    e.preventDefault();
    var idp = 0;
    var nombre = this.cajaNombreRef.current.value;
    var imagen = this.cajaImagenRef.current.value;
    var ids = parseInt(this.state.seleccionado.idSerie);
    var pj = {
      idPersonaje: idp,
      nombre: nombre,
      imagen: imagen,
      idSerie: ids,
    };
    var request = "/api/Personajes";
    var url = Global.url + request;
    axios.post(url, pj).then((res) => {
      this.setState({
        insertado: true,
      });
    });
  };
  render() {
    if (this.state.insertado) return <Redirect to="/" />;
    return (
      <div>
        <h1>Nuevo Personaje</h1>
        <form onSubmit={this.nuevoPj}>
          <label>Nombre:</label>
          <input
            type="text"
            name="cajanombre"
            ref={this.cajaNombreRef}
            className="form-control"
          />
          <label>Imagen:</label>
          <input
            type="text"
            name="cajaimagen"
            ref={this.cajaImagenRef}
            className="form-control"
          />
          <label>Serie:</label>
          <select className="form-control" onChange={this.cambio}>
            {this.state.series.map((serie, i) => {
              {
                console.log(serie);
              }
              return <option value={serie.idSerie}>{serie.nombre}</option>;
            })}
          </select>
          <button className="btn btn-success">Insertar</button>
        </form>
      </div>
    );
  }
}
