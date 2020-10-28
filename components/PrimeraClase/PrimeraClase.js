//si trabajamos con ES6, siempre debemos importar
//component de react
import React,{Component} from 'react';
//cualquier clase ES6 hereda de component
//siempre debe empezar por mayuscula o no funcionará
//si queremos utilizar un css debemos importarlo
import "./PrimeraClase.css";

class PrimeraClase extends Component{
//toda clase contiene un metodo render que se utiliza para el dibujo
//el componente
//el metodo render será evaluado en todo momento
//ahi tendremos el codigo del return
render(){
    return(<React.Fragment>
        <h1 className="rojo">Primer componente Class</h1>
        <h2 className="azul">Segundo componente Class</h2>
    </React.Fragment>);
}
}

export default PrimeraClase;