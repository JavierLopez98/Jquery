import React, { Component } from 'react'

export default class EjemploSimple extends Component {
    //propiedades para enlazar las cajas <inpu>
    nombre=React.createRef();
    apellidos=React.createRef();

    //para dibujar,necesitamos un state
    //donde almacenaremos un usuario
    state={
        usuario:{}
    }

    //metodo para capturar los datos
    recibirDatos=(e)=>{
        //en react debemos cortar el submit para trabajar en front
        e.preventDefault();
        console.log("Nombre: "+this.nombre.current.value);
        console.log("Apellidos: "+this.apellidos.current.value);
        var user={
            nombre:this.nombre.current.value
            ,apellidos:this.apellidos.current.value
        };
        this.setState({usuario:user});
    }

    render() {
        return (
            <div>
                <h1>Ejemplo Forms React</h1>
        {this.state.usuario.nombre && (<h2 style={{color:"blue"}}>{this.state.usuario.nombre}, {this.state.usuario.apellidos}</h2>)}
                <form onSubmit={this.recibirDatos}>
                    <label htmlFor="nombre">Nombre: </label>
                    <input type="text" ref={this.nombre}
                    name="nombre"
                    onChange={this.recibirDatos}/><br/>
                    <label htmlFor="apellidos">apellidos: </label>
                    <input type="text" ref={this.apellidos}
                    name="apellidos"
                    onChange={this.recibirDatos}/><br/>
                    <button>Enviar datos</button>
                </form>
            </div>
        )
    }
}
