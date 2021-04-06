import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

interface IUpdateModal {
  open: any;
  close: any;
  flightProviderUpdate: string;
  flightCodeUpdate: string;
  sourcePortNameUpdate: string;
  sourcePortCodeUpdate: string;
  destinationPortNameUpdate: string;
  destinationPortCodeUpdate: string;
  scheduledArrivalUpdate: Date;
  scheduledDepartureUpdate: Date;
  statusUpdate: string;
  handleChange: any;
  updateFunction: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export const ModalWindowUpdate = (props: IUpdateModal) => {
  const classes = useStyles();
  const {
    open,
    close,
    flightProviderUpdate,
    flightCodeUpdate,
    sourcePortNameUpdate,
    sourcePortCodeUpdate,
    destinationPortNameUpdate,
    destinationPortCodeUpdate,
    scheduledArrivalUpdate,
    scheduledDepartureUpdate,
    statusUpdate,
    handleChange,
    updateFunction,
  } = props;
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              label="FlightProvider"
              variant="outlined"
              name="flightProviderUpdate"
              value={flightProviderUpdate}
              onChange={handleChange}
            />
            <TextField
              label="FlightCode"
              variant="outlined"
              name="flightCodeUpdate"
              value={flightCodeUpdate}
              onChange={handleChange}
            />
            <TextField
              label="SourcePortName"
              variant="outlined"
              name="sourcePortNameUpdate"
              value={sourcePortNameUpdate}
              onChange={handleChange}
            />
            <TextField
              label="SourcePortCode"
              variant="outlined"
              name="sourcePortCodeUpdate"
              value={sourcePortCodeUpdate}
              onChange={handleChange}
            />
            <TextField
              label="DestinationPortName"
              variant="outlined"
              name="destinationPortNameUpdate"
              value={destinationPortNameUpdate}
              onChange={handleChange}
            />
            <TextField
              label="DestinationPortCode"
              variant="outlined"
              name="destinationPortCodeUpdate"
              value={destinationPortCodeUpdate}
              onChange={handleChange}
            />
            <TextField
              label="ScheduledArrival"
              variant="outlined"
              type="datetime-local"
              name="scheduledArrivalUpdate"
              value={scheduledArrivalUpdate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="ScheduledDeparture"
              variant="outlined"
              type="datetime-local"
              name="scheduledDepartureUpdate"
              value={scheduledDepartureUpdate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Status"
              variant="outlined"
              name="statusUpdate"
              value={statusUpdate}
              onChange={handleChange}
            />
            <Button onClick={updateFunction}>Update</Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};
