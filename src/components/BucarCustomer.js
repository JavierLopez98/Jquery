import React, { Component } from 'react';
import axios from 'axios';
import Global from './../Global'

export default class BucarCustomer extends Component {
   
    cajaCustomerRef=React.createRef();
    
    state={
        customer:{}
        ,status:false
    }

    buscarCliente=e=>{
        e.preventDefault();
        var idcliente=this.cajaCustomerRef.current.value.toUpperCase();
        var request="customers/"+idcliente+".json"
        var urlcustomers=Global.urlnorthwind+request;
        axios.get(urlcustomers).then(res=>{
            this.setState({
                customer:res.data.customer
                ,status:true
            })
        });
    }

    render() {
       // if(this.state.status && this.state.customer){
        return (
            <div>
                <h1>Buscador Customer</h1>
                <form onSubmit={this.buscarCliente}>
                    <label>Id Customer: </label>
                    <input type="text" name="cajacustomer" ref={this.cajaCustomerRef}/>
                    <br/>
                    <button>Buscar Cliente</button>
                </form>
                {this.state.status && (
                    <div>
                        <h1 style={{color:"green"}}>Name: {this.state.customer.contactName}</h1>
                        <h2>Company:{this.state.customer.companyName}</h2>
                        <h3>Oficio: {this.state.customer.contactTitle}</h3>
                        <h3>Ciudad: {this.state.customer.city}</h3>
                    </div>
                )}
            </div>
        )
        //}
    }
}
