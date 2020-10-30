import React,{Component} from 'react';
import Ale from './../../assets/images/Alestorm.jpg';

class Alestorm extends Component{
    render(){
        return (<div>
            <h1>Alestorm</h1>
            <img style={{width:"200px",height:"200px"}} src={Ale}/>
            </div>);
    }
}
export default Alestorm;