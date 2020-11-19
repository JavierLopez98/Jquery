import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends Component {
  state = {
    open: false,
    nombre: "",
    apellido: "",
    aceptado: false,
  };
  nombreRef = React.createRef();

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  cancelar = () => {
    this.setState({
      open: false,
    });
  };
  aceptar = () => {
    this.setState({
      open: false,
      aceptado: true,
    });
  };
  setNombre = (event) => {
    this.setState({ nombre: event.target.value });
  };
  setApellido = (event) => {
    this.setState({ apellido: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.aceptado && (
          <h1>
            {this.state.nombre}///
            {this.state.apellido}
          </h1>
        )}
        <Button variant="outlined" color="primary" onClick={this.handleOpen}>
          Abrir Form
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.cancelar}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Titulo</DialogTitle>
          <DialogContent>
            <DialogContentText>Escribe tu nombre</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="Nombre"
              onChange={this.setNombre}
              label="Nombre"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="Apellido"
              onChange={this.setApellido}
              label="Apellido"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.cancelar} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.aceptar} color="primary">
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
