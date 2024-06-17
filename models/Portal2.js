import mongoose from "mongoose";
const portal_2Schema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EurekaTeams",
      required: true,
    },
    documentLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const portal_2 =
  mongoose.models.portal_2 || mongoose.model("portal_1", portal_2Schema);
export default portal_2;
