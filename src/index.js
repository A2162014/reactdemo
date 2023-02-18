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
    <h1>Welcome to React world</h1>
)