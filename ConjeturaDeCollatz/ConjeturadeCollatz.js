import React, { Component } from 'react'

export default class ConjeturadeCollatz extends Component {

    num=React.createRef();

    state={
        numero={}
    }
    calcularConjetura=(e)=>{
        e.preventDefault();
        var contador=0;
        do{
            if(this.num%2==0){
                this.num=this.num/2
                //almacenar numero
            }
            else{
                this.num=this.num*3+1
                //almacenar resultado
            }


            contador++;
        }while(this.num!=1);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.calcularConjetura}>
                <label htmlFor="numero">Numero inicial</label>
                <input type="number" ref={this.num} name="numero"/><br/>
                <button>Iniciar</button>
                {this.state.numero.length>0&&(<h2>{this.state.numero}</h2>)}
                </form>
                
            </div>
        )
    }
}
