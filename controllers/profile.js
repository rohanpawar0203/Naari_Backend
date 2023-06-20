import Profile from "../models/Profile.js";
import User from "../models/User.js";

// /* CREATE PROFILE */
export const createProfile = async (req, res) => {
  try {
    const {
      userId,
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
    } = req.body;
    const newProfile = new Profile({
      userId,
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
      profile_status: "pending",
    });
    await newProfile.save();

    const profile = await newProfile.save();

    res.status(201).json(profile);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// /* GET ALL PROFILES */
export const getProfiles = async (req, res) => {
  try {
    const profile = await Profile.find();
    res.status(200).json(profile);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// /* GET USER PROFILE */

export const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const profile = await Profile.find({ userId });
    res.status(200).json(profile);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// /* DELETE PROFILE */

export const deleteProfile = async (req, res) => {
  try {
    const { profileId } = req.params;
    const profile = await Profile.findById(profileId);
    console.info("profileId, profile", profileId, profile);
    if (profile) {
      profile.delete(profile);
    }
    res.status(200).json("Profile deleted successfully");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// /* UPDATE PROFILE */

export const updateProfile = async (req, res) => {
  try {
    const { profileId } = req.params;
    const { userId } = req.body;
    const { changed_status } = req.body;

    const updateProfile = await Profile.findByIdAndUpdate(
      profileId,
      {
        profile_status: changed_status,
      },
      { new: true }
    );

    res.status(200).json({ message: "Profile Status updated" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// // /* UPDATE */
// export const likePost = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { userId } = req.body;
//     const post = await Post.findById(id);
//     const isLiked = post.likes.get(userId);

//     if (isLiked) {
//       post.likes.delete(userId);
//     } else {
//       post.likes.set(userId, true);
//     }

//     const updatedPost = await Post.findByIdAndUpdate(
//       id,
//       { likes: post.likes },
//       { new: true }
//     );

//     res.status(200).json(updatedPost);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };
