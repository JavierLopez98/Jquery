import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class Alerta extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  alertaNormal = () => {
    alert("alerta normal");
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.alertaNormal}>Alerta normal</button>
        <Button className="btn btn-danger" onClick={this.handleClickOpen}>
          Alerta
        </Button>
        {/*ventana emergente de borrado*/}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Titulo de alerta"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Soy el mensaje de la alerta</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} className="btn btn-success">
              Aceptar
            </Button>
            <Button onClick={this.handleClose} className="btn btn-danger">
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
