import React, { useState } from "react";
import { auth, db, storage } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import StoreLogo from "../../assets/storeLogo.webp";
import { CgMail } from "react-icons/cg";
import { AiFillLock, AiOutlineUser } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BiImages } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./auth.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    // if user not full all fields then show this error
    if (
      !userName ||
      !phoneNumber ||
      !country ||
      !email ||
      !password ||
      !profileImage
    ) {
      setErrorMessage("Please fill in all the fields.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        const userData = {
          userName: userName,
          phoneNumber: phoneNumber,
          country: country,
          email: email,
          imageName: profileImage ? profileImage.name : null,
        };

        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, userData);

        if (profileImage) {
          const storageRef = ref(
            storage,
            `profile_images/${user.uid}/${profileImage.name}`
          );

          await uploadBytes(storageRef, profileImage);
          console.log("Profile image uploaded successfully!");
        }

        setSuccessMessage(
          "SignUp Successfully, Now you can redirect to Home Page"
        );
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })

      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      });
  };

  return (
    <div className="auth_container max-width flex">
      <form onSubmit={handleSignUp} className="auth_form">
        <h2 className="form_heading">Welcome</h2>
        <img src={StoreLogo} alt="Logo" />

        {successMessage && (
          <div className="successMessage">{successMessage}</div>
        )}
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}

        <label htmlFor="email">Full Name</label>
        <div className="input-field">
          <AiOutlineUser className="auth_icon" />
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Full Name"
          />
        </div>
        <label htmlFor="email">Phone Number</label>
        <div className="input-field">
          <FiPhoneCall className="auth_icon" />
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
          />
        </div>

        <label htmlFor="email">Country</label>
        <div className="input-field">
          <BsGlobe className="auth_icon" />
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
          />
        </div>
        <label htmlFor="email">Email</label>
        <div className="input-field">
          <CgMail className="auth_icon" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <label htmlFor="email">Password</label>
        <div className="input-field">
          <AiFillLock className="auth_icon" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <label htmlFor="email">Profile Image</label>
        <div className="input-field">
          <BiImages className="auth_icon" />
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
        </div>

        <button type="submit" className="auth_Btn">
          Sign Up
        </button>
        <p className="auth_privacy">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
