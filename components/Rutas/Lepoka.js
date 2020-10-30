import React,{Component} from 'react';
import Lep from './../../assets/images/Lepoka.jpg';

class Lepoka extends Component{
    render(){
        return (<div>
            <h1>Lepoka</h1>
            <img style={{width:"200px",height:"200px"}} src={Lep}/>
            </div>);
    }
}
export default Lepoka;