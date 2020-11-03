//si trabajamos con ES6, siempre debemos importar
//component de react
import React,{Component} from 'react';
//cualquier clase ES6 hereda de component
//siempre debe empezar por mayuscula o no funcionará
//si queremos utilizar un css debemos importarlo
//para llamar funciones externas no se utiliza this
import "./PrimeraClase.css";

//Podemos crear metodos fuera de la clase 
//con la sintaxis function. es lo mismo
//pero no podemos utilizar variables de la clase
function miFuncion(){
    console.log("estoy en mi funcion");
}

class PrimeraClase extends Component{
    //para crear metodos de la clase no se
    //utiliza ninguna palabra clave
    //lo mismo para variables
    contador=1;
    metodoAccion=()=>{
        console.log("Contador "+ this.contador);
        this.contador++;
    }
    //podemos manejar variables de estado para los dibujos
    //las variables de estado debemos declararlas para poder utilizarlas
    //state={variable1:valor1,variable2:valor2....variableN:valorN};

    //podemos combinar props que recibimos con state
    //para visualizar los cambios
    state={valor:parseInt(this.props.inicio)};
    incrementarEstado=()=>{
        //vamos a tener un contador para
        //dibujar su incremento en la pagina
        //cada vez que entremos aqui, incrementamos
        //el contador
        this.setState({
            valor : this.state.valor+1
        });
    }
    
    //toda clase contiene un metodo render que se utiliza para el dibujo
    //el componente
    //el metodo render será evaluado en todo momento
    //ahi tendremos el codigo del return
    render(){
        //dentro del rendes podemos declarar tambien
        //funciones o variables, pero debemos hacerlo
        //con la sintaxis anterior (var,const,function)
        var numero=1;
        const hacerAlgo=()=>{
            console.log("Haciendo algo..."+numero);
            numero++;
        }

        
        return(<React.Fragment>
            <h1 className="rojo">Primer componente Class</h1>
        <h2 className="azul">Estado: {this.state.valor}</h2>
            <button onClick={this.metodoAccion}>Incrementar Contador</button>
            <button onClick={()=>{
                miFuncion();
                hacerAlgo();
                this.incrementarEstado();
            }}>Mi Funcion</button>
        </React.Fragment>);
    }
}

export default PrimeraClase;
