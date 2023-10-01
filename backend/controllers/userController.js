import asyncHandler from "../../backend/middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    })

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

// @desc    Register user & get token
// @route   POST /api/users
// @access  Public
const RegisterUsr = asyncHandler(async (req, res) => {
  res.send("Register User");
});

// @desc    LOGOUT user & Clear Cookie
// @route   POST /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout");
});

// @desc    Get user profile
// @route   POST /api/users/profiles
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("User Profile");
});

// @desc    Update user profile
// @route   PUT /api/users/profiles
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update User Profile");
});

// @desc    Get Users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("Get Users");
});

// @desc    Delete User
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete User");
});

// @desc    Get User By ID
// @route   DELETE /api/users/:id
// @access  Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("Get User By ID");
});

// @desc    Update User
// @route   PUT /api/users/:id
// @access  Private/Admin
const UpdateUser = asyncHandler(async (req, res) => {
  res.send("Update User");
});

export {
  authUser,
  RegisterUsr,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  UpdateUser,
};
