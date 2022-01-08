import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "react-avatar";
import {
  getUserDetailsAction,
  updateUserProfileAction,
} from "../actions/userActions";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState();
  const [saveTravellers, setSaveTravellers] = useState([]);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const userDetail = useSelector((state) => state.userDetail);
  const { loading, error, user } = userDetail;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const uploadPicHandler = () => {
    console.log("Upload profile pic");
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetailsAction("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [navigate, userInfo, dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(navigate);
    // dispatch(loginAction(email, password));
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateUserProfileAction({
          id: user._id,
          name,
          email,
          password,
          saveTravellers,
          gender,
          dob,
        })
      );
    }
  };
  return (
    <>
      <div className="dark:bg-gray-900"></div>
    </>
  );
};

export default ProfileScreen;
