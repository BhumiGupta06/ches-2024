import mongoose from "mongoose";
const portal_4Schema = new mongoose.Schema(
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
    pptLink: {
      type: String,
      required: true,
    },
    ImageLink: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);
const portal_4 =
  mongoose.models.portal_4 || mongoose.model("portal_4", portal_4Schema);
export default portal_4;
