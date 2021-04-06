import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FlightDetails = new Schema({
  flightCode: {
    type: Schema.Types.String,
  },
  flightProvider: {
    type: Schema.Types.String,
  },
  sourcePortName: {
    type: Schema.Types.String,
  },
  sourcePortCode: {
    type: Schema.Types.String,
  },
  destinationPortName: {
    type: Schema.Types.String,
  },
  destinationPortCode: {
    type: Schema.Types.String,
  },
  scheduledArrival: {
    type: Schema.Types.Date,
  },
  scheduledDeparture: {
    type: Schema.Types.Date,
  },
  status: {
    type: Schema.Types.String,
    enum: ["LANDED", "ON SCHEDULE", "DELAYED"],
    default: "LANDED",
  },
});

export default mongoose.model("FlightDetails", FlightDetails);
