import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      // required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      // required: true,
      min: 2,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    email: {
      type: String,
      // required: true,
      max: 50,
      unique: true,
    },
    contact: {
      type: Number,
      required: true,
      min: 10,
    },
    address: {
      type: String,
      max: 100,
    },
    pincode: {
      type: String,
    },
    type: {
      type: String,
    },
    role: {
      type: String,
    },
    companyName: {
      type: String,
    },
    revenuePerYear: {
      type: String,
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

const User = mongoose.model("User", UserSchema);
export default User;
