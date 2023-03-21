// import React from "react";
// import ReactDOM from "react-dom/client";

// import Header from './Header.js'
// import Body from './Body.js'
// import Footer from './Footer.js'
// import course, { topics, duration, myName, myLastName } from "./Body";
// import * as body from './Body'
// import App from "./Body";
// import App from './App.js'
// import './style.css'

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <>
//         {/* <h3>You selected {course}</h3>
//         <h3>Topics are {topics}</h3>
//         <h3>Duration is {duration}</h3>
//         <h3>My name is {myName()}</h3>
//         <h3>My last name is {myLastName()}</h3> */}
//         {/* <h3>You selected {body.default}</h3>
//         <h3>Topics are {body.topics}</h3>
//         <h3>Duration is {body.duration}</h3>
//         <h3>My name is {body.myName()}</h3>
//         <h3>My last name is {body.myLastName()}</h3> */}
//         {/* <App name = "Ashvath" place = "bangalore"/>
//         <App name = "Barath" place = "chennai"/> */}
//         {/* <App name="Ashvath" />
//         <App name="Barath" /> */}
//         <App />
//         {/* <Header />
//         <Body />
//         <Footer /> */}
//     </>
// )

import React from 'react'
import ReactDOM from 'react-dom/client';

import { legacy_createStore as createStore } from 'redux'

import counterReducer from "./reducer";
// store => global state
// action => it describes what you want to do
const store = createStore(counterReducer)

function increment() {
    store.dispatch({
        type: 'INCREMENT'
    })
}

function decrement() {
    store.dispatch({
        type: 'DECREMENT'
    })
}

const Counter = () => {
    return (
        <div>
            <h1>{store.getState()}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

const render = () => ReactDOM.render(
    <Counter />,
    document.getElementById('root')
)

render()
store.Subscribe(render)