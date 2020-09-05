const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  event_name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  location: { type: String, required: true },
  time: {type:String, required: true}

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;