function SumarNumeros(props){
    const{num1,num2,color,realizaSuma}=props;
    //var num1=props.num1;
    //var num2=props.num2;
    var suma=parseInt(num1)+parseInt(num2);
    //var estilo={color:props.color};
    //var realizarSuma=props.realizarSuma;

    const sumar=()=>{
        var suma =parseInt(num1)+parseInt(num2);
        console.log("La suma es "+suma);
    }
    return (
    <div>
        <h1 style={{color:color}}>Component SumarNumeros</h1>
        <h2 style={{color:color}}>Primer numero: {num1}</h2>
        <h2 style={{color:color}}>Segundo numero {num2}</h2>
        <h2 style={{color:color}}>Suma: {suma}</h2>
        <button type="button" onClick={()=>sumar()}>Sumar</button>
        <button onClick={()=>realizaSuma(num1,num2)}>suma padre</button>
    </div>);
}

export default SumarNumeros;