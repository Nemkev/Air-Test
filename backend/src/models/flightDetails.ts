import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FlightDetails = new Schema({
  flightCode: {
    type: Schema.Types.String,
    default: null,
  },
  flightProvider: {
    type: Schema.Types.String,
    default: null,
  },
  sourcePortName: {
    type: Schema.Types.String,
    default: null,
  },
  sourcePortCode: {
    type: Schema.Types.String,
    default: null,
  },
  destinationPortName: {
    type: Schema.Types.String,
    default: null,
  },
  destinationPortCode: {
    type: Schema.Types.String,
    default: null,
  },
  scheduledArrival: {
    type: Schema.Types.Date,
    default: null,
  },
  scheduledDeparture: {
    type: Schema.Types.Date,
    default: null,
  },
  status: {
    type: Schema.Types.String,
    enum: ["LANDED", "ON SCHEDULE", "DELAYED"],
    default: "LANDED",
  },
});

export default mongoose.model("FlightDetails", FlightDetails);
