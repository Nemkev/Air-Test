import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

interface ICreateModal {
  open: any;
  close: any;
  flightProviderCreate: string;
  flightCodeCreate: string;
  sourcePortNameCreate: string;
  sourcePortCodeCreate: string;
  destinationPortNameCreate: string;
  destinationPortCodeCreate: string;
  scheduledArrivalCreate: Date;
  scheduledDepartureCreate: Date;
  statusCreate: string;
  handleChange: any;
  createFunction: any;
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

export const ModalWindowCreate = (props: ICreateModal) => {
  const classes = useStyles();
  const {
    open,
    close,
    flightProviderCreate,
    flightCodeCreate,
    sourcePortNameCreate,
    sourcePortCodeCreate,
    destinationPortNameCreate,
    destinationPortCodeCreate,
    scheduledArrivalCreate,
    scheduledDepartureCreate,
    statusCreate,
    handleChange,
    createFunction,
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
              name="flightProviderCreate"
              value={flightProviderCreate}
              onChange={handleChange}
            />
            <TextField
              label="FlightCode"
              variant="outlined"
              name="flightCodeCreate"
              value={flightCodeCreate}
              onChange={handleChange}
            />
            <TextField
              label="SourcePortName"
              variant="outlined"
              name="sourcePortNameCreate"
              value={sourcePortNameCreate}
              onChange={handleChange}
            />
            <TextField
              label="SourcePortCode"
              variant="outlined"
              name="sourcePortCodeCreate"
              value={sourcePortCodeCreate}
              onChange={handleChange}
            />
            <TextField
              label="DestinationPortName"
              variant="outlined"
              name="destinationPortNameCreate"
              value={destinationPortNameCreate}
              onChange={handleChange}
            />
            <TextField
              label="DestinationPortCode"
              variant="outlined"
              name="destinationPortCodeCreate"
              value={destinationPortCodeCreate}
              onChange={handleChange}
            />
            <TextField
              label="ScheduledArrival"
              type="datetime-local"
              name="scheduledArrivalCreate"
              value={scheduledArrivalCreate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            />
            <TextField
              label="ScheduledDeparture"
              type="datetime-local"
              name="scheduledDepartureCreate"
              value={scheduledDepartureCreate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange}
            />
            <TextField
              label="Status"
              variant="outlined"
              name="statusCreate"
              value={statusCreate}
              onChange={handleChange}
            />
            <Button onClick={createFunction}>Create</Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};
