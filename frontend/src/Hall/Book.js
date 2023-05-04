import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../backend/Firebase/firebase";

export default async function Book(
    BUid, fName, lName, pNumber, email, hAddress, imageUpload
) {
  const res = await fetch("/api/user/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([uid, uName, fName, lName, pNumber, birthday]),
  });
  if (!res.ok) {
    console.log("bad thing happened");
    const error = await res.json();
    console.log(error);
    // setErrorMessage(error.code);
  } else {
    const response = await res.json();
    console.log("response data is", response);
  }
}
