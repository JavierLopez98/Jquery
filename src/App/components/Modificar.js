import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";

export default class Modificar extends Component {
  state = {
    status: false,
    series: [],
    personajes: [],
    personaje: {},
    serie: {},
  };

  componentDidMount = () => {
    this.cargaPjs();
    this.cargaSeries();
  };

  cargaSeries = () => {
    var request = "/api/Series";
    var url = Global.url + request;
    axios.get(url).then((res) => {
      this.setState({
        series: res.data,
        status: true,
      });
    });
  };

  cargaPjs = () => {
    var request = "/api/Personajes";
    var url = Global.url + request;
    axios.get(url).then((res) => {
      this.setState({
        personajes: res.data,
        status: true,
      });
    });
  };
  changeSerie = (event) => {
    this.setState({
      serie: event.target.value,
    });
    console.log(this.state.serie);
  };
  changePersonaje = (event) => {
    this.setState({
      personaje: event.target.value,
    });
    console.log(this.state.personaje);
  };

  modificarPj = (e) => {
    e.preventDefault();
    var idp = this.state.personaje.idPersonaje;
    var nom = this.state.personaje.nombre;
    var img = this.state.personaje.imagen;
    var ids = this.state.serie.idSerie;
    var pj = {
      idPersonaje: idp,
      nombre: nom,
      imagen: img,
      idSerie: ids,
    };

    var url = Global.url + "/api/Personajes";
    axios.put(url, pj).then((res) => {
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Modificar personaje</h1>
        <form onSubmit={this.modificarPj}>
          <label>Personaje: </label>
          <select className="form-control">
            <option value="" selected disabled hidden>
              Elige personaje
            </option>
            {this.state.personajes.map((pj, i) => {
              return (
                <option key={i} value={pj.idPersonaje}>
                  {pj.nombre}
                </option>
              );
            })}
          </select>
          <label>Serie:</label>
          <select className="form-control" onChange={this.changeSerie}>
            <option value="" selected disabled hidden>
              Elige serie
            </option>
            {this.state.series.map((serie, i) => {
              return (
                <option key={i} value={serie.idSerie}>
                  {serie.nombre}
                </option>
              );
            })}
          </select>
          <button className="btn btn-success">Modificar</button>
        </form>
        {this.state.personaje && (
          <div>
            <h1>{this.state.personaje.nombre}</h1>
            <img src={this.state.personaje.imagen} style={{ width: "200px" }} />
          </div>
        )}
        {this.state.serie && (
          <div>
            <h1>{this.state.serie.nombre}</h1>
            <img src={this.state.serie.imagen} />
          </div>
        )}
      </div>
    );
  }
}
