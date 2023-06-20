import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    revenuePerYear: {
      type: Number,
    },
    gst_in: {
      type: String,
    },
    pan_number: {
      type: String,
    },
    aadhar_number: {
      type: String,
    },
    account_number: {
      type: String,
    },
    account_name: {
      type: String,
    },
    ifsc_code: {
      type: String,
    },
    profile_status: {
      type: String,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
