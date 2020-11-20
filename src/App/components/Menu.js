import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import Global from "./../../Global";

export default class Menu extends Component {
  state = {
    series: [],
    status: false,
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

  componentDidMount = () => {
    this.cargaSeries();
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Series y Personajes</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/nuevo">
                  Nuevo<span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/modificar">
                  Modificar<span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Funciones
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {this.state.series.map((serie, i) => {
                    return (
                      <a
                        key={i}
                        href={"/detalleSerie/" + serie.idSerie}
                        style={{ display: "block" }}
                      >
                        {serie.nombre}
                      </a>
                    );
                  })}
                  <a className="dropdown-item"></a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
