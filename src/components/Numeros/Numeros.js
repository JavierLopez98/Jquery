import React,{Component} from 'react';
import Numero from './Numero';

class Numeros extends Component{

    suma=numsuma=>{
        this.setState({
            suma:this.state.suma+numsuma
        })
    }

    state={
        numeros:[,5,7,12,54,23,546]
        ,suma:0
    };
    setNuevoNumero=()=>{
        var random=parseInt((Math.random()*100)+1);
        var numeros=this.state.numeros;
        numeros.push(random);
        this.setState({
            numeros:numeros
        });
    }

    render(){
        return(<div>
            <h1 style={{color:"blue"}}>{this.state.suma}</h1>
            <button onClick={()=>this.setNuevoNumero()}>Generar Numero</button>
            <ul>
                <h2>Numeros a Sumar</h2>
                {
                    this.state.numeros.map((numero,index)=>{
                        return <Numero numero={numero} key={index}suma={this.suma}/>
                    })
                }
            </ul>
        </div>
        );
    }
}

export default Numeros;