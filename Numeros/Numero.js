import React,{Component} from 'react';

class Numero extends Component{

    sumarNumeros=()=>{
        this.props.suma(this.props.numero);
    }

    

    render(){
        return(
            <React.Fragment>
                <li><button onClick={
                    ()=>this.sumarNumeros()
                }>+{this.props.numero}</button></li>
                
            </React.Fragment>
        );
    }
}

export default Numero;