import { Request, Response } from "express";
import db from "../models/db";
import flyValidate from "../services/flyValidate";

export const getAllFly = async (req: Request, res: Response) => {
  try {
    const data = await db.FlightDetails.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.json(error);
  }
};

export const getCurrentFly = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await db.FlightDetails.findById(id);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.json(error);
  }
};

export const createNewFly = async (req: Request, res: Response) => {
  try {
    const {
      flightCode,
      flightProvider,
      sourcePortName,
      sourcePortCode,
      destinationPortName,
      destinationPortCode,
      scheduledArrival,
      scheduledDeparture,
      status,
    } = req.body;
    await flyValidate.validateAsync(req.body);

    const newFly = await new db.FlightDetails({
      flightCode,
      flightProvider,
      sourcePortName,
      sourcePortCode,
      destinationPortName,
      destinationPortCode,
      scheduledArrival,
      scheduledDeparture,
      status,
    }).save();
    res.json(newFly);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.json(error);
  }
};

export const deleteCurrentFly = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.FlightDetails.findByIdAndDelete(id);
    res.json({ status: "deleted" });
  } catch (error) {
    console.log(error);
    res.status(400);
    res.json(error);
  }
};

export const updateCurrentFly = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.FlightDetails.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json({ status: "updated" });
  } catch (error) {
    console.log(error);
    res.status(400);
    res.json(error);
  }
};
