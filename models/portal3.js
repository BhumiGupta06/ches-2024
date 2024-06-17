import mongoose from "mongoose";
const portal_3Schema = new mongoose.Schema(
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
    VideoLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const portal_3 =
  mongoose.models.portal_3 || mongoose.model("portal_3", portal_3Schema);
export default portal_3;
