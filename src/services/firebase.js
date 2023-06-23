import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query ,where, addDoc} from 'firebase/firestore'



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

export async function getItemData(itemId){
  const docRef = doc(db, "products", itemId)
  const docSnap = await getDoc(docRef)
  return {id: docSnap.id , ...docSnap.data()}
}



export async function getCategoryData(categoryId){
  const q = query(collection(db, "products"), where("category", "==", categoryId))
  const productsSnapshot = await getDocs(q)
  const arrayDocs = productsSnapshot.docs
  const dataDocs = arrayDocs.map((doc) => {
    return {...doc.data(), id: doc.id}
  })
  return dataDocs
}

export async function createOrder(data){
  const ordersCollectionRef = collection(db, "orders" )

  const response = await addDoc(ordersCollectionRef, data)
  return response.id
}