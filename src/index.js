import React from "react";
import ReactDOM from "react-dom/client";

// import Header from './Header.js'
// import Body from './Body.js'
// import Footer from './Footer.js'
// import course, { topics, duration, myName, myLastName } from "./Body";
// import * as body from './Body'
import App from "./Body";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        {/* <h3>You selected {course}</h3>
        <h3>Topics are {topics}</h3>
        <h3>Duration is {duration}</h3>
        <h3>My name is {myName()}</h3>
        <h3>My last name is {myLastName()}</h3> */}
        {/* <h3>You selected {body.default}</h3>
        <h3>Topics are {body.topics}</h3>
        <h3>Duration is {body.duration}</h3>
        <h3>My name is {body.myName()}</h3>
        <h3>My last name is {body.myLastName()}</h3> */}
        {/* <App name = "Ashvath" place = "bangalore"/>
        <App name = "Barath" place = "chennai"/> */}
        <App name="Ashvath" />
        <App name="Barath" />
        {/* <Header />
        <Body />
        <Footer /> */}
    </>
)