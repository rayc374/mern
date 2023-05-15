const mongoose = require('mongoose');
const EventSchema = mongoose.Schema({
  start: Data,
  end: Data,
  title: String,
});
const Event = mongoose.model((name = 'Event'), EventSchema);

module.exports = Event;
