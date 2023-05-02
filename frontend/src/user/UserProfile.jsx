import React, { useContext, useEffect, useState } from "react";
import "./UserProfile.css";
import { AuthContext } from "../components/auth";
import Button from "@mui/material/Button";
import { storage } from "../../../backend/Firebase/firebase";
import { getDownloadURL, listAll, ref, uploadBytesResumable } from "firebase/storage";

const UserProfile = () => {
  const { currentUser, setCurrentUser, image, setImage } = useContext(AuthContext);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState(null);
  let currentUserData = [];

  const uploadImage = async () => {
    if (uploadImage == null) return;
    const imageRef = ref(
      storage,
      `images/${currentUser.uid}/${currentUser.uid}`
    );
    await uploadBytesResumable(imageRef, imageUpload).then(() => {
      alert("Image Uploaded");
    });
  };

  useEffect(() => {
    if (localStorage.getItem("user") != "undefined" || null) {
      currentUserData = JSON.parse(localStorage.getItem("user"));
      setCurrentUser(currentUserData);
      setImage(localStorage.getItem("imageUrl"));
      document.getElementById("profilePic").src = localStorage.getItem("imageUrl");
      document.getElementById("inputUsername").value = currentUserData.displayName;
      document.getElementById("inputEmailAddress").value = currentUserData.email;
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("user") != "undefined" || null) {
      currentUserData = JSON.parse(localStorage.getItem("user"));
      setCurrentUser(currentUserData);
      const imageListRef = ref(storage, `images/${currentUserData.uid}`);
      listAll(imageListRef).then((res) => {
        res.items.forEach((item)=>{
getDownloadURL(item).then((url)=>{
    setImageList(url);
    setImage(url);
    localStorage.setItem("imageUrl", url);
    document.getElementById("profilePic").src = url;
})
        })
      });
    }
  }, []);

  return (
    <div className="container-xl px-4 mt-4">
      <div className="row">
        <div className="col-xl-4">
          {/* <!-- Profile picture card--> */}
          <div className="cardProfile mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              {/* <!-- Profile picture image--> */}
              <img id="profilePic"
                className="img-account-profile rounded-circle mb-2"
                src="http://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              {/* <!-- Profile picture help block--> */}
              <div className="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div>
              {/* <!-- Profile picture upload button--> */}
              <Button
                variant="contained"
                component="label"
                onChange={uploadImage}
                style={{ backgroundColor: "#112d32", marginTop: "35px" }}
              >
                Upload
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(e) => {
                    setImageUpload(e.target.files[0]);
                  }}
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          {/* <!-- Account details card--> */}
          <div className="cardProfile1 mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <form className="profileForm" style={{ backgroundColor: "white" }}>
                {/* <!-- Form Group (username)--> */}
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">
                    Username (how your name will appear to other users on the
                    site)
                  </label>
                  <input
                    className="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    defaultValue="username"
                  />
                </div>
                {/* <!-- Form Row--> */}
                <div className="row gx-3 mb-3">
                  {/* <!-- Form Group (first name)--> */}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputFirstName">
                      First name
                    </label>
                    <input
                      className="form-control"
                      id="inputFirstName"
                      type="text"
                      placeholder="Enter your first name"
                      defaultValue="Valerie"
                    />
                  </div>
                  {/* <!-- Form Group (last name)--> */}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLastName">
                      Last name
                    </label>
                    <input
                      className="form-control"
                      id="inputLastName"
                      type="text"
                      placeholder="Enter your last name"
                      defaultValue="Luna"
                    />
                  </div>
                </div>
                {/* <!-- Form Row        --> */}
                <div className="row gx-3 mb-3">
                  {/* <!-- Form Group (organization name)--> */}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputOrgName">
                      Organization name
                    </label>
                    <input
                      className="form-control"
                      id="inputOrgName"
                      type="text"
                      placeholder="Enter your organization name"
                      defaultValue="Start Bootstrap"
                    />
                  </div>
                  {/* <!-- Form Group (location)--> */}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLocation">
                      Location
                    </label>
                    <input
                      className="form-control"
                      id="inputLocation"
                      type="text"
                      placeholder="Enter your location"
                      defaultValue="San Francisco, CA"
                    />
                  </div>
                </div>
                {/* <!-- Form Group (email address)--> */}
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputEmailAddress">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Enter your email address"
                    defaultValue="name@example.com"
                  />
                </div>
                {/* <!-- Form Row--> */}
                <div className="row gx-3 mb-3">
                  {/* <!-- Form Group (phone number)--> */}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      defaultValue="555-123-4567"
                    />
                  </div>
                  {/* <!-- Form Group (birthday)--> */}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputBirthday">
                      Birthday
                    </label>
                    <input
                      className="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Enter your birthday"
                      defaultValue="06/10/1988"
                    />
                  </div>
                </div>
                {/* <!-- Save changes button--> */}
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ marginBottom: "30px", backgroundColor: "#112d32" }}
                >
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
