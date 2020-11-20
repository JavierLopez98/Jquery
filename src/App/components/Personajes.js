import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { Redirect } from "react-router-dom";

export default class Personajes extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    personajes: [],
    status: false,
  };

  componentDidMount = () => {
    var request = "/api/Series/PersonajesSerie/" + this.props.id;
    var url = Global.url + request;
    axios.get(url).then((res) => {
      this.setState({
        personajes: res.data,
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <table className="table table-light">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>imagen</th>
            </tr>
          </thead>
          <tbody>
            {this.state.personajes.map((pj, i) => {
              return (
                <tr>
                  <td>{pj.nombre}</td>
                  <td>
                    <img src={pj.imagen} style={{ width: "200px" }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
