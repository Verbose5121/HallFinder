import { collection, getDocs } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase.jsx";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const querySnapshot = await getDocs(collection(db, "communities"));

// const querySnapshot = await getDocs(collection(db, "users"));

// let communityArr = [];
// querySnapshot.forEach((doc) => {
// communityArr.push(doc.data.value.mapValue.fields("communityAssociationName"));
//   console.log(`${doc.id} => ${doc.data()}`);
//   console.log(communityArr)
// });

// JSON.parse(jsonString)