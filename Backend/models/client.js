const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  email: String,
  phone: String,
  assignedProfessor: { type: mongoose.Schema.Types.ObjectId, ref: "Professor", default: null },
});

module.exports = mongoose.model("Client", clientSchema);
