import React,{Component} from 'react';

class Deporte extends Component{
    //state={seleccionado: ""};

    seleccionarDeporte=()=>{
        //cuando pulsemos en el boton, llamaremos
        //al metodo del padre que nos han enviado en props

        this.props.seleccionarFavorito(this.props.deporte);
        //console.log(this.props.deporte);
        //cuando el usuario haga click, cambiamos el valor del state
        /*this.setState({
            seleccionado:this.props.deporte
        });*/
    }
    render(){
        return (
            <React.Fragment>
                <li style={{color:"blue"}}>{this.props.deporte}____________
                
                    <button onClick={()=>this.seleccionarDeporte()}>Seleccionar Deporte</button>_______________
                    <span style={{color:"red"}}>
                       
                    </span>
                </li>
                
            </React.Fragment>
        );
    }
}

export default Deporte;