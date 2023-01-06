import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'

/**
 * Create Nested header element Using React.createElement(h1,h2,h3)
 * inside a div with class tittle
 * TASK 1
 */

 
const h1=React.createElement("h1",{
    style:{color:"red"}
},"React")

const h2=React.createElement("h2",{
    style:{color:"red"}
},"is")
const h3=React.createElement("h3",{
    style:{color:"red"}
},"Love")

const div=createElement("div",{className:"tittle"},[h1, h2, h3])

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(div)

/**
//  * Create the same element using jsx
 * inside a div with class tittle
 * TASK 2
 */

// const h1=<h1>HEllo</h1>
// const h2=<h2>HEllo</h2>
// const h3=<h3>HEllo</h3>

// const div=(<div className='tittle'>
// {h1}
// {h2}
// {h3}
// </div>)

// const root=ReactDOM.createRoot(document.getElementById("root"))

// root.render(div)

/**
//  * Create the functional conponent of the same with jsx
 * inside a div with class tittle
 * TASK 2
 */

const DivHeader=() =>(
    <div className='tittle'>
        <h1>HEllo</h1>
        <h1>World</h1>
        <h1>Abhihshek</h1>
    </div>
)