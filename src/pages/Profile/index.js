import React, { useEffect, useState } from "react";
import { auth, db } from "./../../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import "./profile.css";
import ProfileCover from "../../assets/profile_banner.webp";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [profileImageURL, setProfileImageURL] = useState(null);

  // fetching the user data from firestore and image url from storage
  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      const userRef = doc(db, "users", user.uid);
      getDoc(userRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            setUserData(docSnap.data());

            // Add this line to fetch the profile image URL
            fetchProfileImageURL(user.uid, docSnap.data().imageName);
          } else {
            console.log("User document does not exist.");
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else {
      setUserData(null);
    }
  }, []);

  // fetch profile image from storage
  const fetchProfileImageURL = (userId, imageName) => {
    const storage = getStorage();
    const imageRef = ref(storage, `profile_images/${userId}/${imageName}`);

    getDownloadURL(imageRef)
      .then((url) => {
        setProfileImageURL(url);
      })
      .catch((error) => {
        console.error("Error fetching profile image URL:", error);
      });
  };

  return (
    <section>
      {userData ? (
        <div className="profile_container max-width">
          <div className="user_cover">
            <img src={ProfileCover} alt="Profile Cover" />
          </div>
          <div className="userdata">
            <div className="userImage">
              {profileImageURL && <img src={profileImageURL} alt="Profile" />}
            </div>
            <div className="userDetails">
              <spane className="user_name">{userData.userName}</spane>
              <span className="user_country"> ({userData.country})</span>
              <p className="user_contact">
                {userData.email} | {userData.phoneNumber}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="error_message">
          Please log in to view your profile.{" "}
          <Link to="/login">Login Here</Link>
        </p>
      )}
    </section>
  );
};

export default Profile;
