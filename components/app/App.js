import logo from './../../logo.svg';
import './App.css';
import SumarNumeros from "./../SumarNumeros";


function App() {

  const sumarPadre=(num1,num2)=>{
    //num1 y num2 los recibimos desde el hijo
    var suma=parseInt(num1)+parseInt(num2);
    console.log("Suma padre: "+suma);
  };
  return (
    <div className="App">
      <SumarNumeros num1="2" num2="3" color="black" realizaSuma={sumarPadre}/>
      <SumarNumeros num1="3" num2="4" color="red" realizaSuma={sumarPadre}/>
      <SumarNumeros num1="5" num2="6" color="blue" realizaSuma={sumarPadre}/>
      <SumarNumeros num1="8" num2="20" color="green" realizaSuma={sumarPadre}/>
      <SumarNumeros num1="123" num2="23" color="yellow" realizaSuma={sumarPadre}/>
    </div>
  );
}

export default App;
