import React from "react";
import ReactDOM from "react-dom/client";

import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Header />
        <Body />
        <Footer />
    </>
)