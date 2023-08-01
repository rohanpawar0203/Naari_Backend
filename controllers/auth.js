import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// /* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      contact,
      type,
      role,
      companyName,
      revenuePerYear,
      gst_in,
      pan_number,
      aadhar_number,
      account_number,
      account_name,
      ifsc_code,
      profile_status,
      address,
      pincode,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      contact,
      type,
      role,
      companyName,
      revenuePerYear,
      gst_in,
      pan_number,
      aadhar_number,
      account_number,
      account_name,
      ifsc_code,
      profile_status,
      address,
      pincode,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// /* LOGGING IN */
export const login = async (req, res) => {
  try {
    // const { email, password } = req.body;
    const { contact, password } = req.body;
    const user = await User.findOne({ contact: contact });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) { return res.status(400).json({ msg: "Invalid credentials. " }); } else {
      if (contact.toString().length === 10) {
        if (!user) return res.status(400).json({ msg: "User does not exist." });
      } else {
        return res.status(401).json({ msg: "Invalid Credentials." });
      }



      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      // delete user.password;
      res.status(200).json({ token, user });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
