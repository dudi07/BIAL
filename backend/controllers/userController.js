import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "./utils/genrateToken.js";
// Auth and get a token
// route POST/api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
// @desc    Register a new user
// route POST/api/users/
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Hello bhai");
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exits");
  }

  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    console.log("Got it");
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    console.log("Got it");
    res.status(400);
    throw new Error("Invalid User data");
  }
});

// get user profile
// route POST/ai/users/profile
// @access protected
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      img: user.img,
      dob: user.dob,
      savedTravllers: user.saveTravllers,
      gender: user.gender,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// update user profile
// route PUT/ai/users/profile
// @access protected
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.img = req.body.img || user.img;
    user.saveTravllers = req.body.saveTravllers || user.saveTravllers;
    user.dob = req.user.dob || user.dob;
    user.gender = req.user.gender || user.gender;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      token: generateToken(updatedUser._id),
      saveTravllers: updatedUser.saveTravllers,
      gender: updatedUser.gender,
    });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});
export { authUser, getUserProfile, registerUser, updateUserProfile };
