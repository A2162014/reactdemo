import React from "react";
import ReactDOM from "react-dom/client";

const uid = "React" //strings
const place = "India" //strings
const num1 = prompt("Enter number 1") //number/integer
const num2 = prompt("Enter number 2") //number/integer
const total = num1 + num2
const avg = Number((num1 + num2) / 2)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // [
    //     <h1>Welcome to React world</h1>,
    //     <h2>This is square method!</h2>
    // ]
    // <div>
    //      <h1>Welcome to React world</h1>
    //      <h2>This is div method!</h2>
    //      <h3>not highly recommended</h3>
    // </div>
    <>
        <h1>Welcome to {uid} world</h1>
        <h2>This is fragment method!</h2>
        <h3>highly recommended</h3>
        <h1>Welcome to {place}!</h1>
        <h2>Number 1 is {num1}.</h2>
        <h2>Number 2 is {num2}.</h2>
        <h2>Total is {total}.</h2>
        <h2>Average is {avg}.</h2>
    </>
)