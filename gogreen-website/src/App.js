import React, { Component } from "react";
import Home from "./components/pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/Footer";
import "react-slideshow-image/dist/styles.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import WhatRecycledPage from "./components/pages/WhatRecycled";
import RecordRecyclingPage from "./components/pages/RecordRecycling";
import WhyRecycle from "./components/pages/WhyRecycle";
import RecyclingoceanPage from "./components/pages/Recyclingocean";
import GlobalRecycle from "./components/pages/GlobalRecycle";
import Register from "./components/pages/Admin";
import RecyclingDepotPage from "./components/pages/mapPage.js";
import About from "./components/pages/About.js";
import ContactUsPage from "./components/pages/Contact.js";
import LoginPage from "./components/pages/Login";
import ForgotPsw from "./components/pages/ForgotPsw";
import HomeRedirectPage from "./components/pages/HomeRedirect";
import FAQPage from "./components/pages/FAQ";
import UserData from "./components/pages/UserData";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/UserData" element={<UserData />} />
          <Route path="/ForgotPsw" element={<ForgotPsw />} />
          <Route path="/whathaveyourecycled" element={<WhatRecycledPage />} />
          <Route path="/inputrecycling" element={<RecordRecyclingPage />} />
          <Route path="/WhyRecycle" element={<WhyRecycle />} />
          <Route path="/recyclingocean" element={<RecyclingoceanPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/recyclingocean" element={<RecyclingoceanPage />} />
          <Route path="/FAQ" element={<FAQPage/>} />
          <Route path="/globalrecycling" element={<GlobalRecycle />} />
          <Route path="/locations" element={<RecyclingDepotPage />} />
          <Route path="/HomeRedirect" element={<HomeRedirectPage />} />




        </Routes>
      </div>
    </div>
  );
}
export default App;