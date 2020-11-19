// import logo from "./logo.svg";
import "./App.css";
import Alerta from "./components/alerta.js";
import FormDialog from "./components/formDialog";
import ScrollDialog from "./components/scrollDialog";

function App() {
  return (
    <div className="App">
      <Alerta />
      <FormDialog />
      <ScrollDialog />
    </div>
  );
}

export default App;
