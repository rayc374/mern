const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  name: String,
  choosedate: Date,
  contact: String,
  contactnumber: String,
  rentam: Boolean,
  rentpm: Boolean,
  venue: String,
});
//module.exports = mongoose.model('FormData', formDataSchema);
const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
