import React, { Component } from 'react'
//primero debemos agregar la libreria de axios
import axios from 'axios';

export default class Customers extends Component {
    urlcustomers="http://northwind.netcore.io/customers?format=json";
    state={
        customers:[]
        ,status:null
    }

    cargarClientes =()=>{
        axios.get(this.urlcustomers).then(res=>{
            console.log(res.data);
            this.setState({
                customers:res.data.customers
                ,status:"success"
            });
        });
    }

    componentWillMount=()=>{
        this.cargarClientes();
    }

    render() {

        if(this.state.customers.length>0){
            //Clientes
            return (
                <div>
                    <h1>Servicio Api Customers</h1>
                    {this.state.customers.map(cliente=>{
                        return(<h2 key={cliente.id}>{cliente.contactName}</h2>)
                    })}
                </div>
            )
        }else if(this.state.customers.length==0){
            //no hemos cargado clientes
            return(<h1>No hay clientes</h1>);
        }else if (this.state.status!="success"){
            //servicio sin procesar
            return(<h1>Cargando servicio...</h1>)
        }else{
            //otra opcion
            return(<h1>Algo ha ido mal</h1>)
        }
    }
}
