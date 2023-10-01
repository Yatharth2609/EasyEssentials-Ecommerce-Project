import express from "express";

const router = express.Router();
import {
  authUser,
  RegisterUsr,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  UpdateUser,
} from "../../backend/controllers/userController.js";
import { protect, admin } from "../../backend/middleware/authMiddleware.js";

router.route("/").post(RegisterUsr).get(protect, admin, getUsers);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserByID)
  .put(protect, admin, UpdateUser);

export default router;
