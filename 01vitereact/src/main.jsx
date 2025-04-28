import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/compiler-runtime.js";
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App..</h1>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target:'_blank'},
    'click me to visit google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
