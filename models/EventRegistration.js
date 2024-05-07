import mongoose from "mongoose";
const participantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    event: {
      type: String,
      required: true,
    },
    admNumber: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const participants =
  mongoose.models.participants ||
  mongoose.model("participants", participantSchema);
export default participants;
