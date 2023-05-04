import React, { useEffect, useState } from "react";
//import './Style.css'
//import "./style.css";
import "./HallPage.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Card from "@mui/material/Card";
import { MuiFileInput } from "mui-file-input";
import Book from "./Book";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const BookingForm = () => {
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const [depositAmount, setDepostAmount] = useState(100);
  const [imageUpload, setImageUpload] = useState(null);

  const handleChange = (newFile) => {
    setImageUpload(newFile);
  };

  const book = async () => {
    const BUid = "BedFYSUGHiMDOxpJrjLFeAkZB2x2";
    const fName = document.getElementById("BFirstName").value;
    const lName = document.getElementById("BLastName").value;
    const pNumber = document.getElementById("BPhoneNumber").value;
    const email = document.getElementById("BEmailAddress").value;
    const hAddress = document.getElementById("BHomeAddress").value;
    Book(BUid, fName, lName, pNumber, email, hAddress, imageUpload );
    Swal.fire({
      title: "The hall has been booked!",
      icon: "success",
      timer: 3000,
    })
  };

  return (
    <div className="col-xl-9">
    {/*  !<!-- Account details card--> */}
    <div className="cardProfile2 mb-4">
      <div className="card-header1">Booking Form</div>
      <div className="card-body2">
        <form
          className="profileForm1"
          style={{ backgroundColor: "white" }}
        >
          {/* <!-- Form Group (username)--> */}
          <div className="mb-3">
            <label className="small mb-1" htmlFor="BFirstName">
              First name
            </label>
            <input
              className="form-control2"
              id="BFirstName"
              type="text"
              placeholder="Enter your first name"
              
            />
          </div>
          {/* <!-- Form Row--> */}
          
            {/* <!-- Form Group (first name)--> */}
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="BLastName">
                Last name
              </label>
              <input
                className="form-control2"
                id="BLastName"
                type="text"
                placeholder="Enter your last name"
                
              />
            </div>
            {/* <!-- Form Group (last name)--> */}
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="BPhoneNumber">
              Phone number
              </label>
              <input
                className="form-control2"
                id="BPhoneNumber"
                type="text"
                placeholder="Enter your Phone number"
                
              />
            </div>
          
          <div className="mb-3">
            <label className="small mb-1" htmlFor="BEmailAddress">
              Email address
            </label>
            <input
              className="form-control2"
              id="BEmailAddress"
              type="email"
              placeholder="Enter your email address"
              
            />
          </div>
          {/* <!-- Form Row--> */}
            {/* <!-- Form Group (phone number)--> */}
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="BHomeAddress">
                Home address
              </label>
              <input
                className="form-control2"
                id="BHomeAddress"
                type="tel"
                placeholder="Enter your Home address"
              />
            </div>
            {/* <!-- Form Group (birthday)--> */}
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputBirthday">
                Photo ID
              </label></div>
              <MuiFileInput
              placeholder="Upload Photo Id"
                className="inputFile1"
                value={imageUpload}
                inputRef={imageUpload}
                onChange={handleChange}
                style={{ color: "black" }}
              />
            
          
          {/* <!-- Save changes button--> */}
          <button
            className="btn btn-primary"
            type="button"
            style={{ marginBottom: "30px", backgroundColor: "#112d32" }}
            onClick={book}
          >
            Book
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default BookingForm;
