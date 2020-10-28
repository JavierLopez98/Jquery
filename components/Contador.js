//para poder utilizar funcionalidades de react es necesario importarlas
//necesitamos la funcionalidad del state
import React,{useState} from 'react';

function Contador(){
    //una variable de estado estará compuesta por
    //nombre para mostrar y set para establecer
    const[numero,setNumero]=useState(0);
    return(
    <div>
        <h1>Ejemplo State Contador</h1>
        <h2 style={{color:"red"}}> el valor del contador es {numero}</h2>
        <button onClick={()=>{
            //anonima
            setNumero(numero+1);
        }}>Incrementar</button>
        <button onClick={()=>{
            setNumero(numero-1);
        }}>Restar</button>
    </div>
    );
}
export default Contador;