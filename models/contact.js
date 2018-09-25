const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
}, { _id: false });

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
