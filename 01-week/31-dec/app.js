import React from 'react'
import ReactDOM from 'react-dom/client'



const heading=React.createElement("h1",{
    id:"My id",
    style:{color:"red"}
},"Namste")
const heading2=React.createElement("h1",{
    id:"My id2",
    style:{color:"yellow"}
},"React")

const div2=React.createElement("div",{},[heading, heading2])

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(div2)