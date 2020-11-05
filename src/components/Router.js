import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import EmpleadoDetalles from "./RutasEmpleados/EmpleadoDetalles";
import Departamentos from "./Crud/Departamentos";
import InsertarDepartamento from "./Crud/InsertarDepartamento";
import DetallesDepartamento from "./Crud/DetallesDepartamento";
import UpdateDepartamento from "./Crud/UpdateDepartamentos";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Departamentos} />
          <Route exact path="/create" component={InsertarDepartamento} />
          <Route
            exact
            path="/details/:id"
            render={(props) => {
              var id = props.match.params.id;
              return <DetallesDepartamento iddepartamento={id} />;
            }}
          />
          <Route
            exact
            path="/update/:id/:nombre/:localidad"
            render={(props) => {
              var id = props.match.params.id;
              var nom = props.match.params.nombre;
              var loc = props.match.params.localidad;
              return (
                <UpdateDepartamento
                  iddepartamento={id}
                  nombre={nom}
                  localidad={loc}
                />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
