import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./App/components/Menu";
import Home from "./App/components/Home";
import DetalleSerie from "./App/components/DetalleSerie";
import Nuevo from "./App/components/Nuevo";
import Modificar from "./App/components/Modificar";
import Personajes from "./App/components/Personajes";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/detalleSerie/:id"
            render={(props) => {
              var id = props.match.params.id;
              return <DetalleSerie id={id} />;
            }}
          />
          <Route path="/nuevo" component={Nuevo} />
          <Route path="/modificar" component={Modificar} />
          <Route
            path="/personajes/:id"
            render={(props) => {
              var id = props.match.params.id;
              return <Personajes id={id} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
