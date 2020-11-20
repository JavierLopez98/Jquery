import React, { Component } from "react";
import Global from "./../../Global";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class DetalleSerie extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.id);
  }

  state = {
    serie: {},
    status: false,
    navegar: false,
  };

  componentDidMount = () => {
    var request = "/api/Series/" + this.props.id;
    var url = Global.url + request;
    axios.get(url).then((res) => {
      this.setState({
        serie: res.data,
        status: true,
      });
    });
  };

  navegar = () => {
    this.setState({
      navegar: true,
    });
  };

  render() {
    if (this.state.navegar)
      return <Redirect to={"/personajes/" + this.state.serie.idSerie} />;
    return (
      <div>
        <img src={this.state.serie.imagen} style={{ width: "200px" }} />

        <h1>{this.state.serie.nombre}</h1>

        <p>IMDB: {this.state.serie.puntuacion}</p>

        <button className="btn btn-success" onClick={this.navegar}>
          Personajes
        </button>
      </div>
    );
  }
}
