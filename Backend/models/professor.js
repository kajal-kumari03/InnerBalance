// const mongoose = require("mongoose");

// const ProfessorSchema = new mongoose.Schema({
//     name: { type: String, required: true },
    // phoneNumber: { type: String, required: true, unique: true },
    // whatsappNumber: { type: String },
    // email: { type: String, required: true, unique: true },
    // password: { type: String, required: true },
    // educationDetails: { type: String },
    // experience: { type: String },
    // address: { type: String }
// });

// module.exports = mongoose.model("Professor", ProfessorSchema);
const mongoose = require("mongoose");

const professorSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  whatsappNumber: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  educationDetails: { type: String },
  experience: { type: String },
  address: { type: String },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
});

module.exports = mongoose.model("Professor", professorSchema);
