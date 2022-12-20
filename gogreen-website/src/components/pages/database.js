import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { db } from "./firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "./firebase-config";

const express = require('express');
const app = express();
const mysql = require('mysql');

const gogreendb = mysql.createConnection({
  user:"G13",
  host:"gogreenserver.mysql.database.azure.com",
  passowrd:"Bip9lhwvFD",
  database:"gogreendatabase",
})

app.listen(3306, () =>{
  console.log("Azure server is running on port 3306");
});