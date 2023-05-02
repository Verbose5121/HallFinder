import React, { useContext, useEffect, useState } from "react";
import "./UserProfile.css";
import { AuthContext } from "../components/auth";
import Button from "@mui/material/Button";
import { storage } from "../../../backend/Firebase/firebase";
import { getDownloadURL, listAll, ref, uploadBytesResumable } from "firebase/storage";

const UserProfile = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
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
    localStorage.setItem("imageUrl", url);
    document.getElementById("profilePic").src = url;
})
        })
      });
    }
  }, []);

  return (
    <div class="container-xl px-4 mt-4">
      {/* <hr class="mt-0 mb-4"> */}
      <div class="row">
        <div class="col-xl-4">
          {/* <!-- Profile picture card--> */}
          <div class="cardProfile mb-4 mb-xl-0">
            <div class="card-header">Profile Picture</div>
            <div class="card-body text-center">
              {/* <!-- Profile picture image--> */}
              <img id="profilePic"
                class="img-account-profile rounded-circle mb-2"
                src="http://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              {/* <!-- Profile picture help block--> */}
              <div class="small font-italic text-muted mb-4">
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
        <div class="col-xl-8">
          {/* <!-- Account details card--> */}
          <div class="cardProfile1 mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
              <form class="profileForm" style={{ backgroundColor: "white" }}>
                {/* <!-- Form Group (username)--> */}
                <div class="mb-3">
                  <label class="small mb-1" for="inputUsername">
                    Username (how your name will appear to other users on the
                    site)
                  </label>
                  <input
                    class="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    value="username"
                  />
                </div>
                {/* <!-- Form Row--> */}
                <div class="row gx-3 mb-3">
                  {/* <!-- Form Group (first name)--> */}
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputFirstName">
                      First name
                    </label>
                    <input
                      class="form-control"
                      id="inputFirstName"
                      type="text"
                      placeholder="Enter your first name"
                      value="Valerie"
                    />
                  </div>
                  {/* <!-- Form Group (last name)--> */}
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputLastName">
                      Last name
                    </label>
                    <input
                      class="form-control"
                      id="inputLastName"
                      type="text"
                      placeholder="Enter your last name"
                      value="Luna"
                    />
                  </div>
                </div>
                {/* <!-- Form Row        --> */}
                <div class="row gx-3 mb-3">
                  {/* <!-- Form Group (organization name)--> */}
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputOrgName">
                      Organization name
                    </label>
                    <input
                      class="form-control"
                      id="inputOrgName"
                      type="text"
                      placeholder="Enter your organization name"
                      value="Start Bootstrap"
                    />
                  </div>
                  {/* <!-- Form Group (location)--> */}
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputLocation">
                      Location
                    </label>
                    <input
                      class="form-control"
                      id="inputLocation"
                      type="text"
                      placeholder="Enter your location"
                      value="San Francisco, CA"
                    />
                  </div>
                </div>
                {/* <!-- Form Group (email address)--> */}
                <div class="mb-3">
                  <label class="small mb-1" for="inputEmailAddress">
                    Email address
                  </label>
                  <input
                    class="form-control"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Enter your email address"
                    value="name@example.com"
                  />
                </div>
                {/* <!-- Form Row--> */}
                <div class="row gx-3 mb-3">
                  {/* <!-- Form Group (phone number)--> */}
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputPhone">
                      Phone number
                    </label>
                    <input
                      class="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value="555-123-4567"
                    />
                  </div>
                  {/* <!-- Form Group (birthday)--> */}
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputBirthday">
                      Birthday
                    </label>
                    <input
                      class="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Enter your birthday"
                      value="06/10/1988"
                    />
                  </div>
                </div>
                {/* <!-- Save changes button--> */}
                <button
                  class="btn btn-primary"
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
