import mongoose from "mongoose";
const EurekaTeamsSchema = new mongoose.Schema(
  {
    TeamName: {
      type: String,
      required: true,
    },
    LeaderEmail: {
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

    // Member1: {
    //   Name: {
    //     type: String,
    //     required: true,
    //   },
    //   admNumber: {
    //     type: String,
    //     required: true,
    //   },
    // },
    // Member2: {
    //   Name: {
    //     type: String,
    //     required: true,
    //   },
    //   admNumber: {
    //     type: String,
    //     required: true,
    //   },
    // },
    // Member3: {
    //   Name: {
    //     type: String,
    //     required: true,
    //   },
    //   admNumber: {
    //     type: String,
    //     required: true,
    //   },
    // },
    // Member4: {
    //   Name: {
    //     type: String,
    //     required: true,
    //   },
    //   admNumber: {
    //     type: String,
    //     required: true,
    //   },
    // },
    // Member5: {
    //   Name: {
    //     type: String,
    //     required: true,
    //   },
    //   admNumber: {
    //     type: String,
    //     required: true,
    //   },
    // },
  },
  { timestamps: true }
);
const EurekaTeams =
  mongoose.models.EurekaTeams ||
  mongoose.model("EurekaTeams", EurekaTeamsSchema);
export default EurekaTeams;
