import { collection, getDocs, getFirestore } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getAllCommunities() {
 let communityArr = []
  const querySnapshot = await getDocs(collection(db, "communities"));
  querySnapshot.forEach((doc) => {
    // communityArr.push(doc.data.value.mapValue.fields("communityAssociationName"));
     // console.log(`${doc.id} => ${doc.data()}`);
   //    console.log(doc.data()['communityAssociationName']);
     // console.log(communityArr)
     communityArr.push(doc.data());
    
    });
return communityArr;
}





// JSON.parse(jsonString)