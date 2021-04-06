import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { ModalWindowCreate } from "../../modules/ModalCreate";
import { ModalWindowUpdate } from "../../modules/ModalUpdate";
import { ModalWindowDelete } from "../../modules/ModalDelete";
import "./index.scss";

export const Fly = () => {
  const [
    {
      flightCodeUpdate,
      flightProviderUpdate,
      sourcePortNameUpdate,
      sourcePortCodeUpdate,
      destinationPortNameUpdate,
      destinationPortCodeUpdate,
      scheduledArrivalUpdate,
      scheduledDepartureUpdate,
      statusUpdate,
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
    flightCodeUpdate: "",
    flightProviderUpdate: "",
    sourcePortNameUpdate: "",
    sourcePortCodeUpdate: "",
    destinationPortNameUpdate: "",
    destinationPortCodeUpdate: "",
    scheduledArrivalUpdate: "",
    scheduledDepartureUpdate: "",
    statusUpdate: "",
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
  const [openChange, setOpenChange] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [currItem, setCurrItem] = useState();

  const setCurrentItemState = (item: any) => {
    setState({
      flightCodeUpdate: item.flightCode,
      flightProviderUpdate: item.flightProvider,
      sourcePortNameUpdate: item.sourcePortName,
      sourcePortCodeUpdate: item.sourcePortCode,
      destinationPortNameUpdate: item.destinationPortName,
      destinationPortCodeUpdate: item.destinationPortCode,
      scheduledArrivalUpdate: item.scheduledArrival,
      scheduledDepartureUpdate: item.scheduledDeparture,
      statusUpdate: item.status,
    });
    setOpenChange(true);
  };

  const handleCloseChange = (e: any) => {
    e.preventDefault();
    setOpenChange(false);
  };

  const handleOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCloseCreate = (e: any) => {
    e.preventDefault();
    setOpenCreate(false);
  };

  const handleCloseDelete = (e: any) => {
    e.preventDefault();
    setOpenDelete(false);
  };

  const getData = async () => {
    const data: any = await axios.get("http://localhost:8000/fly");
    setFlyData(data.data);
  };

  const updateData = async () => {
    await axios.put(`http://localhost:8000/fly/${currItem}`, {
      flightCode: flightCodeUpdate,
      flightProvider: flightProviderUpdate,
      sourcePortName: sourcePortNameUpdate,
      sourcePortCode: sourcePortCodeUpdate,
      estinationPortName: destinationPortNameUpdate,
      destinationPortCode: destinationPortCodeUpdate,
      scheduledArrival: scheduledArrivalUpdate,
      scheduledDeparture: scheduledDepartureUpdate,
      status: statusUpdate,
    });
    setOpenChange(false);
  };

  const deleteData = async () => {
    await axios.delete(`http://localhost:8000/fly/${currItem}`);
    setOpenDelete(false);
  };

  useEffect(() => {
    getData();
  }, [openChange, openCreate, openDelete]);

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
    setOpenCreate(false);
  };

  return (
    <div>
      {!flyData ? (
        <p className="load">Loading</p>
      ) : (
        <div className="fly-table">
          <ModalWindowCreate
            open={openCreate}
            close={handleCloseCreate}
            flightProviderCreate={flightProviderCreate}
            flightCodeCreate={flightCodeCreate}
            sourcePortNameCreate={sourcePortNameCreate}
            sourcePortCodeCreate={sourcePortCodeCreate}
            destinationPortNameCreate={destinationPortNameCreate}
            destinationPortCodeCreate={destinationPortCodeCreate}
            scheduledArrivalCreate={scheduledArrivalCreate}
            scheduledDepartureCreate={scheduledDepartureCreate}
            statusCreate={statusCreate}
            handleChange={handleChange}
            createFunction={createData}
          />

          <ModalWindowUpdate
            open={openChange}
            close={handleCloseChange}
            flightProviderUpdate={flightProviderUpdate}
            flightCodeUpdate={flightCodeUpdate}
            sourcePortNameUpdate={sourcePortNameUpdate}
            sourcePortCodeUpdate={sourcePortCodeUpdate}
            destinationPortNameUpdate={destinationPortNameUpdate}
            destinationPortCodeUpdate={destinationPortCodeUpdate}
            scheduledArrivalUpdate={scheduledArrivalUpdate}
            scheduledDepartureUpdate={scheduledDepartureUpdate}
            statusUpdate={statusUpdate}
            handleChange={handleChange}
            updateFunction={updateData}
          />
          <ModalWindowDelete
            open={openDelete}
            close={handleCloseDelete}
            deleteFunction={deleteData}
          />
          <div className="table-item-data">
            <div className="port-cell">Time</div>
            <div className="port-cell">Source Port</div>
            <div className="port-cell">Destination Port</div>
            <div className="port-cell">Status</div>
            <div className="port-cell">Provider</div>
          </div>
          {flyData.map((item: any) => (
            <div className="table-item-data" key={String(item._id)}>
              <div className="port-cell">
                {item.scheduledArrival.split("T")[0]}{" "}
                {item.scheduledArrival.split("T")[1].slice(0, 5)}
              </div>
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
                    setCurrentItemState(item);
                  }}
                >
                  Change
                </Button>
                <div className="port-cell">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrItem(item._id);
                      setOpenDelete(true);
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
