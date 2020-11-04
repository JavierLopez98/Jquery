import React, { Component } from 'react'
import axios from 'axios';
import Global from './../Global';
import './BuscarCoches.css';

export default class BuscarCoches extends Component {

    cajaCocheRef=React.createRef();
    
    state={
        coches:[]
        ,cochesbuscados:[]
        ,status:false
    }
    
    cargaCoches=()=>{
        
        var request="webresources/coches";
        axios.get(Global.urlcoches+request).then(res=>{
            //console.log(res.data);
            this.setState({
                coches:res.data
                ,status:true
                
            });

        });
    }

    componentDidMount=()=>{
        this.cargaCoches();
        console.log(this.state.coches);
    }

    
    buscaCoche=e=>{
        e.preventDefault();
        var coches=[];
        for (var coche of this.state.coches){
            
            if(coche.marca==this.cajaCocheRef.current.value.toUpperCase()){
                coches.push(coche);
                console.log(coche.marca);
                console.log(this.cajaCocheRef.current.value.toUpperCase())
            }
            this.setState({
                cochesbuscados:coches
            })
        }
        console.log(coches);
    }

    render() {
        return (
            <div>
                <h1>Buscar coches</h1>
                <form>
                    <label>Marca: </label>
                    <input type="text" name="cajacoche" ref={this.cajaCocheRef}/>
                    <br/>
                    <button onClick={this.buscaCoche}>Buscar coche</button>
                    <button onClick={this.cargaCoches} className="todos">Mostrar todos los coches</button>
                    <br/>
                </form>
                  <table>
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Conductor</th>
                            <th>imagen</th>
                        </tr>
                    </thead>
                    {(this.state.status && this.state.cochesbuscados.length==0) && <tbody>
                        {this.state.coches.map(coche=>{
                            return(<tr key={coche.id}>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td>{coche.conductor}</td>
                                <td><img src={coche.imagen}/></td>
                            </tr>)
                        })}
                    </tbody>}
                    {(this.state.status && this.state.cochesbuscados.length>0)&&
                    <tbody>
                        {this.state.cochesbuscados.map(coche=>{
                            return(<tr key={coche.id}>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td>{coche.conductor}</td>
                                <td><img src={coche.imagen}/></td>
                            </tr>)
                        })}
                    </tbody>
                    } 
                </table>
                
                
            </div>
        )
    }
}
