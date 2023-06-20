import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  deleteProfile,
  getProfiles,
  getUserProfile,
  updateProfile,
} from "../controllers/profile.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getProfiles);
router.get("/:userId/profile", verifyToken, getUserProfile);
router.patch("/:profileId", verifyToken, updateProfile);
router.delete("/:profileId", verifyToken, deleteProfile);

// /* UPDATE */
// router.patch("/:id/like", verifyToken, likePost);

export default router;
