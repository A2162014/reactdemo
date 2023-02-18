import React from "react";
import ReactDOM from "react-dom/client";
import pic1 from './Image_created_with_a_mobile_phone.png'

const uid = "React" //strings
// const place = "India" //strings
// const num1 = prompt("Enter number 1") //number/integer
// const num2 = prompt("Enter number 2") //number/integer
// const total = Number(num1) + Number(num2)
// const avg = (Number(num1) + Number(num2)) / 2
const date = Date()
const obj = new Date() //object defining
const h = obj.getHours()
let greetings = ""
if (h <= 12) {
    // alert("Good Morning!")
    greetings = "Good Morning!"
} else if (h > 12 && h <= 17) {
    // alert("Good Afternoon!")
    greetings = "Good Afternoon!"
} else {
    // alert("Good Evening!")
    greetings = "Good Evening!"
}
const m = obj.getMinutes()
const s = obj.getSeconds()
const dt = obj.getDate()
const mt = obj.getMonth() + 1
const yr = obj.getFullYear()
const heading = {
    color: "red",
    fontFamily: "arial",
    backgroundColor: "yellow"
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // [
    //     <h1>Welcome to React world</h1>,
    //     <h2>This is square method!</h2>
    // ]
    // <div>
    //      <h1>Welcome to React world</h1>
    //      <h2>This is div method!</h2>
    //      <h3>not used a lot</h3>
    // </div>
    <>
        <h1 style={heading}>Welcome to {uid} world</h1> {/*inline css*/}
        <h2>This is fragment method!</h2>
        <h3>highly recommended</h3>
        <h3>{date}</h3>
        <h3> {h}:{m}:{s}</h3>
        <h3> {dt}/{mt}/{yr}</h3>
        <h3>{greetings}</h3>
        <img src={pic1} alt="" width={300} />
        <img src="/public/logo512.png" alt="" />
        {/* <h1>Welcome to {place}!</h1>
        <h2>Number 1 is {num1}.</h2>
        <h2>Number 2 is {num2}.</h2>
        <h2>Total is {total}.</h2>
        <h2>Average is {avg}.</h2> */}
    </>
)