import React,{Component} from 'react';
import Penta from './../../assets/images/Pentakill.jpg';

class Pentakill extends Component{
    render(){
        return (<div>
            <h1>Pentakill</h1>
            <img style={{width:"200px",height:"200px"}} src={Penta}/>
            </div>);
    }
}
export default Pentakill;