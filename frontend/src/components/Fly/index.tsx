import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./index.scss";

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

export const Fly = () => {
  const [
    {
      flightCode,
      flightProvider,
      sourcePortName,
      sourcePortCode,
      destinationPortName,
      destinationPortCode,
      scheduledArrival,
      scheduledDeparture,
      status,
      flightCodeCreate,
      flightProviderCreate,
      sourcePortNameCreate,
      sourcePortCodeCreate,
      destinationPortNameCreate,
      destinationPortCodeCreate,
      scheduledArrivalCreate,
      scheduledDepartureCreate,
      statusCreate,
    },
    setState,
  ] = useReducer((s: any, a: any) => ({ ...s, ...a }), {
    flightCode: "",
    flightProvider: "",
    sourcePortName: "",
    sourcePortCode: "",
    destinationPortName: "",
    destinationPortCode: "",
    scheduledArrival: "",
    scheduledDeparture: "",
    status: "",
    flightCodeCreate: "",
    flightProviderCreate: "",
    sourcePortNameCreate: "",
    sourcePortCodeCreate: "",
    destinationPortNameCreate: "",
    destinationPortCodeCreate: "",
    scheduledArrivalCreate: "",
    scheduledDepartureCreate: "",
    statusCreate: "",
  });

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      [name]: value,
    });
  };

  const [flyData, setFlyData]: any = useState();
  const classes = useStyles();
  const [openChange, setOpenChange] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [currItem, setCurrItem] = useState();

  const handleOpenChange = (item: any) => {
    setState({
      flightCode: item.flightCode,
      flightProvider: item.flightProvider,
      sourcePortName: item.sourcePortName,
      sourcePortCode: item.sourcePortCode,
      destinationPortName: item.destinationPortName,
      destinationPortCode: item.destinationPortCode,
      scheduledArrival: item.scheduledArrival,
      scheduledDeparture: item.scheduledDeparture,
      status: item.status,
    });
    setOpenChange(true);
  };

  const handleCloseChange = () => {
    setOpenChange(false);
  };

  const handleOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
  };

  const getData = async () => {
    const data: any = await axios.get("http://localhost:8000/fly");
    const mapedData = data.data.map((item: any) => {
      return (item.id = item._id);
    });
    setFlyData(data.data);
  };

  const updateData = async () => {
    await axios.put(`http://localhost:8000/fly/${currItem}`, {
      flightCode,
      flightProvider,
      sourcePortName,
      sourcePortCode,
      destinationPortName,
      destinationPortCode,
      scheduledArrival,
      scheduledDeparture,
      status,
    });
  };

  const deleteData = async (id: any) => {
    await axios.delete(`http://localhost:8000/fly/${id}`);
  };

  useEffect(() => {
    getData();
  }, [openChange, openCreate]);

  useEffect(() => {
    getData();
  }, []);

  const createData = async () => {
    await axios.post("http://localhost:8000/fly", {
      flightCode: flightCodeCreate,
      flightProvider: flightProviderCreate,
      sourcePortName: sourcePortNameCreate,
      sourcePortCode: sourcePortCodeCreate,
      destinationPortName: destinationPortNameCreate,
      destinationPortCode: destinationPortCodeCreate,
      scheduledArrival: scheduledArrivalCreate,
      scheduledDeparture: scheduledDepartureCreate,
      status: statusCreate,
    });
  };

  return (
    <div>
      {!flyData ? (
        <p className="load">Loading</p>
      ) : (
        <div className="fly-table">
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openCreate}
            onClose={handleCloseCreate}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openCreate}>
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
                    variant="outlined"
                    name="scheduledArrivalCreate"
                    value={scheduledArrivalCreate}
                    onChange={handleChange}
                  />
                  <TextField
                    label="ScheduledDeparture"
                    variant="outlined"
                    name="scheduledDepartureCreate"
                    value={scheduledDepartureCreate}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Status"
                    variant="outlined"
                    name="statusCreate"
                    value={statusCreate}
                    onChange={handleChange}
                  />
                  <Button onClick={createData}>Create</Button>
                </form>
              </div>
            </Fade>
          </Modal>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openChange}
            onClose={handleCloseChange}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openChange}>
              <div className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    label="FlightProvider"
                    variant="outlined"
                    name="flightProvider"
                    value={flightProvider}
                    onChange={handleChange}
                  />
                  <TextField
                    label="FlightCode"
                    variant="outlined"
                    name="flightCode"
                    value={flightCode}
                    onChange={handleChange}
                  />
                  <TextField
                    label="SourcePortName"
                    variant="outlined"
                    name="sourcePortName"
                    value={sourcePortName}
                    onChange={handleChange}
                  />
                  <TextField
                    label="SourcePortCode"
                    variant="outlined"
                    name="sourcePortCode"
                    value={sourcePortCode}
                    onChange={handleChange}
                  />
                  <TextField
                    label="DestinationPortName"
                    variant="outlined"
                    name="destinationPortName"
                    value={destinationPortName}
                    onChange={handleChange}
                  />
                  <TextField
                    label="DestinationPortCode"
                    variant="outlined"
                    name="destinationPortCode"
                    value={destinationPortCode}
                    onChange={handleChange}
                  />
                  <TextField
                    label="ScheduledArrival"
                    variant="outlined"
                    name="scheduledArrival"
                    value={scheduledArrival}
                    onChange={handleChange}
                  />
                  <TextField
                    label="ScheduledDeparture"
                    variant="outlined"
                    name="scheduledDeparture"
                    value={scheduledDeparture}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Status"
                    variant="outlined"
                    name="status"
                    value={status}
                    onChange={handleChange}
                  />
                  <Button onClick={updateData}>Update</Button>
                </form>
              </div>
            </Fade>
          </Modal>
          <div className="table-item-data">
            <div className="port-cell">Time</div>
            <div className="port-cell">Source Port</div>
            <div className="port-cell">Destination Port</div>
            <div className="port-cell">Status</div>
            <div className="port-cell">Provider</div>
          </div>
          {flyData.map((item: any) => (
            <div className="table-item-data" key={String(item._id)}>
              <div className="port-cell">{item.scheduledArrival}</div>
              <div className="port-cell">{item.sourcePortName}</div>
              <div className="port-cell">{item.destinationPortName}</div>
              <div className="port-cell">
                {item.status === "LANDED" ? (
                  <div className="fly-status-landed">{item.status}</div>
                ) : item.status === "DELAYED" ? (
                  <div className="fly-status-delayed">{item.status}</div>
                ) : (
                  <div className="fly-status-shedule">{item.status}</div>
                )}
              </div>
              <div className="port-cell">{item.flightProvider}</div>
              <div className="port-cell">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrItem(item._id);
                    handleOpenChange(item);
                  }}
                >
                  Change
                </Button>
                <div className="port-cell">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      deleteData(item._id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <button
            className="creation-fly-button"
            onClick={(e) => {
              e.preventDefault();
              handleOpenCreate();
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};
