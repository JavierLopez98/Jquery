import React,{Component} from 'react';
import LogoHome from './../../assets/images/Home.jpg';

class Home extends Component{
    render(){
        return (<div>
            <h1>Home</h1>
            <img style={{width:"200px",height:"200px"}} src={LogoHome}/>
            </div>);
    }
}
export default Home;