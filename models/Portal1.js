import mongoose from "mongoose";
const portal_1Schema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EurekaTeams",
      required: true,
    },
    abstract: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const portal_1 =
  mongoose.models.portal_1 || mongoose.model("portal_1", portal_1Schema);
export default portal_1;
