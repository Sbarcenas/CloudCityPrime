import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function Modal({ open, handleClose, el }) {
  if (open && el && handleClose) {
      console.log(el)
    return (
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {el.benefit.name}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cliente:{" "}
            {el.user_client.first_name + " " + el.user_client.last_name}
          </Typography>
          <Typography gutterBottom>
            Leido por:{" "}
            {el.user_establishment.first_name +
              " " +
              el.user_establishment.last_name}
          </Typography>

          <Typography gutterBottom>
            Token: {el.nano_id.split("-")[1]}
          </Typography>
          <Typography gutterBottom>Puntos: {el.benefit.points}</Typography>
          <Typography gutterBottom>
            Detalles: {el.benefit.description}
          </Typography>

          <Typography gutterBottom>Detalles: {el.benefit.terms}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            ¡Ok!
          </Button>
        </DialogActions>
      </Dialog>
    );
  } else {
    return null;
  }
}
