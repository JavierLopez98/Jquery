import React,{Component} from 'react';
import Blind from './../../assets/images/BlindGuardian.jpg';

class BlindGuardian extends Component{
    render(){
        return (<div>
            <h1>BlindGuardian</h1>
            <img style={{width:"200px",height:"200px"}} src={Blind}/>
            </div>);
    }
}
export default BlindGuardian;