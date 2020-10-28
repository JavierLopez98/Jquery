
import React,{useState} from 'react';

function Car(props){
    //tenemos un estado para saber si el coche está arrancado o no
    //dicho estado queremos que pueda cambiar
    //e ira sobre una variable state
    //al iniciar está parado por defecto
    const [estado,setEstado]=useState(false);
    const [velocidad,setVelocidad] =useState(0);
    var coche={
        marca: props.marca
        ,modelo: props.modelo
        ,aceleracion: props.aceleracion
        ,velocidadmax: props.velocidadmax
    }

    //quiero dibujar la palabra arrancado o parado en funcion del estado
    //ademas quiero poner color
    const comprobarEstado=()=>{
        if (estado){
            return (<span style={{color:"green"}}>Arrancado</span>);
        }else{
            
            return (<span style={{color:"red"}}>Parado</span>);
        }
    }

    //metodo para acelerar coche
    const acelerarCoche=()=>{
        if(!estado) setVelocidad(velocidad);
        else{
            if(velocidad<parseInt(coche.velocidadmax))
            if(velocidad+parseInt(coche.aceleracion)>coche.velocidadmax) setVelocidad(coche.velocidadmax);
            else setVelocidad(velocidad+parseInt(coche.aceleracion));
            
            else{
                console.log("se ha alcanzado la velocidad maxima");
                setVelocidad(parseInt(coche.velocidadmax));
            }
        }
        console.log(coche.aceleracion);
        
    }
    const cambiaEstado=()=>{
        setEstado(!estado);
        if(estado) setVelocidad(0)
    }

    return(<div>
        <h1 style={{color:'green'}}>{coche.marca},{coche.modelo}</h1>
        <h2>El coche está...{comprobarEstado()}</h2>
        <h3 style={{color:'blue'}}>Velocidad {velocidad} Km/h</h3>
        <button onClick={()=>cambiaEstado()}>Arrancar/Parar</button>
        <button onClick={()=>acelerarCoche()}>Acelerar</button>
    </div>);
}
export default Car;