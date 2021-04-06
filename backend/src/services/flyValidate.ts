import joi from "joi";

export default joi.object().keys({
  flightCode: joi.string().max(50).min(1),
  flightProvider: joi.string().max(50).min(1),
  sourcePortName: joi.string().max(50).min(1),
  sourcePortCode: joi.string().max(50).min(1),
  destinationPortName: joi.string().max(50).min(1),
  destinationPortCode: joi.string().max(50).min(1),
  scheduledArrival: joi.date().min("now"),
  scheduledDeparture: joi.date().min("now"),
  status: joi.string(),
});
