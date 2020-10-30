import React, { Component } from 'react'
//para router necesitamos agregar unos componentes de la libreria del router-DOM
import {BrowserRouter,Route,Switch} from 'react-router-dom'
//todos los componentes entre los que deseemos navegar,
//estarán aqui declarados
import Alestorm from './Rutas/Alestorm';
import Home from './Rutas/Home';
import BlindGuardian from './Rutas/BlindGuardian';
import Lepoka from './Rutas/Lepoka';
import Pentakill from './Rutas/Pentakill';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/Alestorm" component={Alestorm}/>
                        <Route path="/BlindGuardian" component={BlindGuardian}/>
                        <Route path="/Lepoka" component={Lepoka}/>
                        <Route path="/Pentakill" component={Pentakill}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
