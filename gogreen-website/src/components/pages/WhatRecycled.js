import React, { useState } from "react";
import "./WhatRecycled.css";
import handslogo from "./handslogo.png";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

let paper = 0;
let tin = 0;
let glass = 0;
let cardboard = 0;
let plastic = 0;
let x = 0;
let i = 0;

function WhatRecycledPage() {
  while (i == 0) {
    GetInputs();
    i++;
  }
  if (paper < 1) {
    paper = 1;
  }

  if (tin < 1) {
    tin = 1;
  }

  if (glass < 1) {
    glass = 1;
  }

  if (cardboard < 1) {
    cardboard = 1;
  }

  if (plastic < 1) {
    plastic = 1;
  }
  return (
    <div className="WhatRecycleSplash">
      <h1>What Have You Recycled?</h1>
      <div className="GreenhandLogo">
        <img src={handslogo} width="100" alt="logo" />
      </div>
      <div>{RecyclingOutput()}</div>
    </div>
  );
}

function RecyclingOutput() {
  return (
    <div className="Outputs">
      <div className="paperdiv">
        <p1 className="Paper">
          Paper: {paper}kg <br />
        </p1>
        {PaperOut()}
        {PaperRecycling()}
      </div>
      <div className="Tindiv">
        <p1 className="Tin">
          Tin: {tin}kg <br />
        </p1>
        {tinOut()}
        {TinRecycling()}
      </div>
      <div className="glassdiv">
        <p1 className="Glass">
          Glass: {glass}kg <br />
        </p1>
        {glassOut()}
        {GlassRecycling()}
      </div>
      <div className="carddiv">
        <p1 className="Cardboard">
          Cardboard: {cardboard}kg <br />
        </p1>
        {cardboardOut()}
        {CardboardRecycling()}
      </div>
      <div className="plasticdiv">
        <p1 className="Plastic">
          Plastic: {plastic}kg <br />
        </p1>
        {plasticOut()}
        {PlasticRecycling()}
      </div>
    </div>
  );
}

function PaperOut() {
  if (paper == 1) {
    return <img src={require("./images/paper.png")} width="108" height="144" />;
  }

  if (paper == 2) {
    return (
      <img src={require("./images/2 paper.png")} width="216" height="144" />
    );
  }

  if (paper == 3) {
    return (
      <img src={require("./images/3 paper.png")} width="324" height="144" />
    );
  }

  if (paper == 4) {
    return (
      <img src={require("./images/4 paper.png")} width="432" height="144" />
    );
  }

  if (paper == 5) {
    return (
      <img src={require("./images/5 paper.png")} width="540" height="144" />
    );
  }

  if (paper == 6) {
    return (
      <img src={require("./images/6 paper.png")} width="648" height="144" />
    );
  }

  if (paper == 7) {
    return (
      <img src={require("./images/7 paper.png")} width="756" height="144" />
    );
  }

  if (paper == 8) {
    return (
      <img src={require("./images/8 paper.png")} width="864" height="144" />
    );
  }

  if (paper == 9) {
    return (
      <img src={require("./images/9 paper.png")} width="972" height="144" />
    );
  }

  if (paper > 9) {
    return (
      <img src={require("./images/10 paper.png")} width="1080" height="144" />
    );
  }
}

function PaperRecycling() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <button className="toggleshowbutton" onClick={() => setShow(!show)}>
          Show/Hide Info
        </button>
      </div>
      <div>{show ? <h1>Hello world</h1> : null}</div>
    </div>
  );
}

function GetInputs() {
  paper = window.prompt("Enter quantity of paper: ");
  tin = window.prompt("Enter number of cans: ");
  glass = window.prompt("Enter number of glasses/bottles: ");
  cardboard = window.prompt("Enter amount of cardboard: ");
  plastic = window.prompt("Enter amount of plastic: ");
}

function tinOut() {
  if (tin == 1) {
    return (
      <img src={require("./images/tincan.png")} width="108" height="144" />
    );
  }

  if (tin == 2) {
    return <img src={require("./images/2 tin.png")} width="216" height="144" />;
  }

  if (tin == 3) {
    return <img src={require("./images/3 tin.png")} width="324" height="144" />;
  }

  if (tin == 4) {
    return <img src={require("./images/4 tin.png")} width="432" height="144" />;
  }

  if (tin == 5) {
    return <img src={require("./images/5 tin.png")} width="540" height="144" />;
  }

  if (tin == 6) {
    return <img src={require("./images/6 tin.png")} width="648" height="144" />;
  }

  if (tin == 7) {
    return <img src={require("./images/7 tin.png")} width="756" height="144" />;
  }

  if (tin == 8) {
    return <img src={require("./images/8 tin.png")} width="864" height="144" />;
  }

  if (tin == 9) {
    return <img src={require("./images/9 tin.png")} width="972" height="144" />;
  }

  if (tin > 9) {
    return (
      <img src={require("./images/10 tin.png")} width="1080" height="144" />
    );
  }
}

function TinRecycling() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <button className="toggleshowbutton" onClick={() => setShow(!show)}>
          Show/Hide Info
        </button>
      </div>
      <div>{show ? <h1>Hello world</h1> : null}</div>
    </div>
  );
}

function glassOut() {
  if (glass == 1) {
    return <img src={require("./images/glass.png")} width="108" height="144" />;
  }

  if (glass == 2) {
    return (
      <img src={require("./images/2 glass.png")} width="216" height="144" />
    );
  }

  if (glass == 3) {
    return (
      <img src={require("./images/3 glass.png")} width="324" height="144" />
    );
  }

  if (glass == 4) {
    return (
      <img src={require("./images/4 glass.png")} width="432" height="144" />
    );
  }

  if (glass == 5) {
    return (
      <img src={require("./images/5 glass.png")} width="540" height="144" />
    );
  }

  if (glass == 6) {
    return (
      <img src={require("./images/6 glass.png")} width="648" height="144" />
    );
  }

  if (glass == 7) {
    return (
      <img src={require("./images/7 glass.png")} width="756" height="144" />
    );
  }

  if (glass == 8) {
    return (
      <img src={require("./images/8 glass.png")} width="864" height="144" />
    );
  }

  if (glass == 9) {
    return (
      <img src={require("./images/9 glass.png")} width="972" height="144" />
    );
  }

  if (glass > 9) {
    return (
      <img src={require("./images/10 glass.png")} width="1080" height="144" />
    );
  }
}

function GlassRecycling() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <button className="toggleshowbutton" onClick={() => setShow(!show)}>
          Show/Hide Info
        </button>
      </div>
      <div>{show ? <h1>Hello world</h1> : null}</div>
    </div>
  );
}

function cardboardOut() {
  if (cardboard == 1) {
    return (
      <img src={require("./images/cardboard.png")} width="108" height="144" />
    );
  }

  if (cardboard == 2) {
    return (
      <img src={require("./images/2 cardboard.png")} width="216" height="144" />
    );
  }

  if (cardboard == 3) {
    return (
      <img src={require("./images/3 cardboard.png")} width="324" height="144" />
    );
  }

  if (cardboard == 4) {
    return (
      <img src={require("./images/4 cardboard.png")} width="432" height="144" />
    );
  }

  if (cardboard == 5) {
    return (
      <img src={require("./images/5 cardboard.png")} width="540" height="144" />
    );
  }

  if (cardboard == 6) {
    return (
      <img src={require("./images/6 cardboard.png")} width="648" height="144" />
    );
  }

  if (cardboard == 7) {
    return (
      <img src={require("./images/7 cardboard.png")} width="756" height="144" />
    );
  }

  if (cardboard == 8) {
    return (
      <img src={require("./images/8 cardboard.png")} width="864" height="144" />
    );
  }

  if (cardboard == 9) {
    return (
      <img src={require("./images/9 cardboard.png")} width="972" height="144" />
    );
  }

  if (cardboard > 9) {
    return (
      <img
        src={require("./images/10 cardboard.png")}
        width="1080"
        height="144"
      />
    );
  }
}

function CardboardRecycling() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <button className="toggleshowbutton" onClick={() => setShow(!show)}>
          Show/Hide Info
        </button>
      </div>
      <div>{show ? <h1>Hello world</h1> : null}</div>
    </div>
  );
}

function plasticOut() {
  if (plastic == 1) {
    return (
      <img src={require("./images/plastic.png")} width="108" height="144" />
    );
  }

  if (plastic == 2) {
    return (
      <img src={require("./images/plastic 2.png")} width="216" height="144" />
    );
  }

  if (plastic == 3) {
    return (
      <img src={require("./images/plastic 3.png")} width="324" height="144" />
    );
  }

  if (plastic == 4) {
    return (
      <img src={require("./images/plastic 4.png")} width="432" height="144" />
    );
  }

  if (plastic == 5) {
    return (
      <img src={require("./images/plastic 5.png")} width="540" height="144" />
    );
  }

  if (plastic == 6) {
    return (
      <img src={require("./images/plastic 6.png")} width="648" height="144" />
    );
  }

  if (plastic == 7) {
    return (
      <img src={require("./images/plastic 7.png")} width="756" height="144" />
    );
  }

  if (plastic == 8) {
    return (
      <img src={require("./images/plastic 8.png")} width="864" height="144" />
    );
  }

  if (plastic == 9) {
    return (
      <img src={require("./images/plastic 9.png")} width="972" height="144" />
    );
  }

  if (plastic > 9) {
    return (
      <img src={require("./images/plastic 10.png")} width="1080" height="144" />
    );
  }
}

function PlasticRecycling() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <button className="toggleshowbutton" onClick={() => setShow(!show)}>
          Show/Hide Info
        </button>
      </div>
      <div>{show ? <h1>Hello world</h1> : null}</div>
    </div>
  );
}

export default WhatRecycledPage;
