import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAEtld25uEWF-DD70wBHEp6ATGtpYx1BVs",
  authDomain: "proyecto-coder-diaz-kelly.firebaseapp.com",
  projectId: "proyecto-coder-diaz-kelly",
  storageBucket: "proyecto-coder-diaz-kelly.appspot.com",
  messagingSenderId: "891309621107",
  appId: "1:891309621107:web:2a71ac73328cec5d53cf06"
};

const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp)
const db = getFirestore(firebaseApp)
console.log(db)


export async function getData() {
  const productsSnapshot = await getDocs(collection(db, "products"))

  const arrayDocs = productsSnapshot.docs
  const dataDocs = arrayDocs.map(doc => {
    return {...doc.data(), id: doc.id}
  });
return dataDocs
}

function getItemData(){}

function getCategoryData(){}
