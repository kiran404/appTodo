// const mongoose = require("mongoose");
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  time: {
    type: Date, // will be back
    default: Date.now,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = mongoose.model("Todo", todoSchema);

export { TodoModel };

// export default mongoose.model("Todo", todoSchema);
// module.exports = mongoose.model("Todo", todoSchema);
