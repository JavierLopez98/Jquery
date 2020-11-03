import React, { Component } from 'react'

export default class ConjeturadeCollatz extends Component {

    num=React.createRef();

    state={
        numeros:[]
    }
    calcularConjetura=(e)=>{
        e.preventDefault();
        var contador=0;
        var numero=parseInt(this.num.current.value);
        var datos=[];
        while(numero!=1){
            if(numero%2==0){
                numero=numero/2;
            }
            else{
                numero=numero*3+1;
                //almacenar resultado
            }
            datos.push(<li key={contador}>{numero}</li>);
            contador++;
        }
        this.setState({
            numeros:datos
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.calcularConjetura}>
                <label htmlFor="numero">Numero inicial</label>
                <input type="number" ref={this.num} name="numero"/><br/>
                <button>Iniciar</button>
                <ul>{this.state.numeros}</ul>
                </form>
                
            </div>
        )
    }
}