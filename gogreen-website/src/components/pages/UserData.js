import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { authentication } from "./firebase-config";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import db from "./firebase-config";

// Get a reference to the database service

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(authentication, provider)
    .then((result) => {
      //THIS IS THE CONDITION FOR WHAT HAPPENS IF THE GOOGLE SIGNIN IS A SUCCESS
      console.log(result);
      setPersistence(authentication, browserSessionPersistence);
    })
    .catch((err) => {
      console.log(err); //CONDITION FOR IF IT ISNT
    });
};

class UserData extends React.Component {
  handleRefresh = () => {
    // by calling this method react re-renders the component
    this.setState({});
  };
  render() {
    return (
      <div className="register">
        <h1>User Details</h1>
        <button className="refreshbutton" onClick={this.handleRefresh}>
          Refresh Details
        </button>
        {userOutput()}
        <br />
      </div>
    );
  }
}

function userOutput() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    const displayName = user.displayName;
    const email = user.email;
    getDoc();

    return (
      <div>
        <br />
        <h2>Hello, {displayName}!</h2> <br />
        <h3>User Stats:</h3> <br />
        <p>
          Paper Recycled: <br /> <br />
          Tin Recycled: <br />
          <br />
          Plastic Recycled: <br />
          <br />
          Card Recycled: <br />
          <br />
          Glass Recycled: <br />
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>You are currently not signed in</h2> <br />
        <button className="Googlebutton" onClick={signInWithGoogle}>
          <img
            className="GoogleImage"
            src="https://i.ibb.co/sp7QxDh/google-signin-button.png"
            alt="google sign in button"
          />
        </button>
      </div>
    );
  }
}

async function addUser() {
  const auth = getAuth();
  const user = auth.currentUser;
  const name = user.displayName;
  const email = user.email;
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getDoc() {
  const auth = getAuth();
  const user = auth.currentUser;
  const name = user.displayName;
  const email = user.email;
  await setDoc(doc(db, "users", email), {
    name: name,
    email: email,
  });
}

export default UserData;