import React,{Component} from 'react';
import Deporte from './Deporte';

class Deportes extends Component{
    //este metodo lo ejecutará el hijo llamando al parent y le mandará su deporte
    seleccionarFavorito=deportefavorito=>{
        this.setState({
            seleccionado:deportefavorito
        });
    }


    //tendremos un estado con un array de deportes
    state={
        deportes:["tenis","baloncesto","boxeo","atletismo","esgrima"]
        ,nombre:"Alumno React"
        ,seleccionado:""
    };
    contador=1;
    nuevoDeporte=()=>{
        //tenemos que recuperar los deportes y despues modificar el state
        var deportes=this.state.deportes;
        deportes.push("Deporte "+this.contador);
        this.contador++;
        console.log(this.contador);
        this.setState({
            deportes:deportes
        });
    }

    render(){
        return(
        <div>
            <h1 style={{color:"green"}}>{this.state.seleccionado}</h1>
            <button onClick={this.nuevoDeporte}>
                Crear nuevo deporte
            </button>
            <h2 >Deportes de {this.state.nombre}</h2>
            <ul>
                {
                    this.state.deportes.map((deporte,index)=>{
                        return <Deporte deporte={deporte} key={index} seleccionarFavorito={this.seleccionarFavorito}/>
                    })
                }
            </ul>
        </div>
        );
    }
}

export default Deportes;