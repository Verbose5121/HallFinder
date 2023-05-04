import React, { useEffect, useState } from "react";
import { uploadPhoto, useAuth, storage } from "./firebase";

import './HallPage.css'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Card from '@mui/material/Card';

export default function BookingForm() {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(null)
  const [loading, setLoading] = useState(false)
  const [percent, setPercent] = useState(0);
  const [depositAmount, setDepostAmount] = useState(100);
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }
  // Photo id upload button 
  function handleClick() {
    uploadPhoto(photo, currentUser);
  }

  function handlePhotoUpload() {
    if (!photo) {
      alert("Please select an image to upload")
    }

    const storageRef = ref(storage, `/images/${currentUser.uid}/${photo.name}`)
    const uploadTask = uploadBytesResumable(storageRef, photo);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update upload progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // retrieve download url 
        // TODO: update current user object with imageurl
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  }


  // console.log(currentUser);
  return (
      <Box
        // component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch', bgcolor: '#fffffff7' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className='bookForm-form'>

          <TextField
            id="first-name"
            label="First Name"
            defaultValue=""
            variant="filled"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="last-name"
            label="Last Name"
            defaultValue=""
            variant="filled"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            required
            id="telephone-number"
            label="Telephone Number"
            defaultValue=""
            variant="filled"
            type='tel'
          />
          <TextField
            id="last-name"
            label="Last Name"
            defaultValue=""
            variant="filled"
          />
          <TextField
            disabled
            id="deposit-amount"
            label="Required Deposit Amount"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            defaultValue={depositAmount}
            variant="filled"
          />
          <TextField
            id="cc-number"
            label="Credit Card Number"
            defaultValue=""
            variant="filled"
            minLength="16"
            maxLength="16"
          />
          <TextField
            required
            id="image-selector"
            label=""
            defaultValue=""
            type="file"
            helperText="Select Photo-ID Image"
          />
          <Button
            variant="contained"
            type="submit"
            id="submitformbtn"
            onClick={handleClick}
          >Book
          </Button>

          {/* <TextField 
        required
        id="filled-required"
        label="Upload Picture ID"
        defaultValue=""
        variant="filled"
        type='file'
      /> */}

        </div>
      </Box>
  )
}
