// import pic1 from './Image_created_with_a_mobile_phone.png';
// import './style.css'

// const uid = "React" //strings
// // const place = "India" //strings
// // const num1 = prompt("Enter number 1") //number/integer
// // const num2 = prompt("Enter number 2") //number/integer
// // const total = Number(num1) + Number(num2)
// // const avg = (Number(num1) + Number(num2)) / 2
// const date = Date()
// const obj = new Date() //object defining
// const h = obj.getHours()
// let greetings = ""
// const cssStyle = {}
// if (h <= 12) {
//     // alert("Good Morning!")
//     cssStyle.color = "yellow"
//     greetings = "Good Morning!"
// } else if (h > 12 && h <= 17) {
//     // alert("Good Afternoon!")
//     greetings = "Good Afternoon!"
//     cssStyle.color = "red"
// } else {
//     // alert("Good Evening!")
//     greetings = "Good Evening!"
//     cssStyle.color = "green"
// }
// const m = obj.getMinutes()
// const s = obj.getSeconds()
// const dt = obj.getDate()
// const mt = obj.getMonth() + 1
// const yr = obj.getFullYear()
// const heading = {
//     color: "red",
//     fontFamily: "arial",
//     backgroundColor: "yellow"
// }
// // const pic2="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FCommons%3AQuality_images&psig=AOvVaw1cw0cOqomCBiMzjUvnXCcw&ust=1676828289315000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCCiaXOn_0CFQAAAAAdAAAAABAE"
// const link = "https://www.google.com"

// function Comp() {
//     return <h3>Internal Component!</h3>
// }

// function Body() {
//     return (
//         // [
//         //     <h1>Welcome to React world</h1>,
//         //     <h2>This is square method!</h2>
//         // ]
//         // <div>
//         //      <h1>Welcome to React world</h1>
//         //      <h2>This is div method!</h2>
//         //      <h3>not used a lot</h3>
//         // </div>
//         <>
//             <div className="body">
//                 <h1 style={heading}>Welcome to {uid} world</h1> {/*inline css*/}
//                 <p>
//                     <h2>This is fragment method!</h2>
//                     <h3 className="heading">highly recommended</h3>
//                     <h3>{date}</h3>
//                     <h3> {h}:{m}:{s}</h3>
//                     <h3> {dt}/{mt}/{yr}</h3>
//                     <h3 style={cssStyle}>{greetings}</h3>
//                     <img src={pic1} alt="" />
//                     {/* <img src="/public/logo512.png" alt="" /> */}
//                     {/* <img src={pic2} alt=""/> */}
//                     <br></br>
//                     <a href={link}>Google!</a>
//                     <Comp />
//                     {/* <h1>Welcome to {place}!</h1>
//                     <h2>Number 1 is {num1}.</h2>
//                     <h2>Number 2 is {num2}.</h2>
//                     <h2>Total is {total}.</h2>
//                     <h2>Average is {avg}.</h2> */}
//                 </p>
//             </div>
//         </>
//     )
// }
// export default Body

// const course = "ReactJS"
// const topics = "Single Page Application"
// const duration = "2 months"

// function myName() {
//     let name = "Ashvath"
//     return name
// }

// function myLastName() {
//     let lname = "Suresh"
//     return lname
// }

// export default course
// export { topics, duration, myName, myLastName }

// function App(props){
//     return(
//         <>
//             <h1> Hello {props.name}</h1>
//             <h2> from {props.place}</h2>
//         </>
//     )
// }

// export default App

import React from "react"

class App extends React.Component {
    render() {
        return (
            <>
                <h2>Class Component example</h2>
                <h2>Hello {this.props.name}</h2>
            </>
        )
    }
}

export default App