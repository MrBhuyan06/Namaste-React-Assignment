// const heading=React.createElement("h1",{style:{color:"red",backgroundColor:"blue"}, id:"heading", class:"heading-class"},"hello React")

//heading1
const heading1 = React.createElement("h1", {
  style: { color: "blue" },
  id:"heading-one"
},"Web-application is love");
//heading2
const heading2 = React.createElement("h2", {
  style: { color: "blue" },
  id:"heading-one"
}, "JavaScript is future");

const container=React.createElement("div",{id:"container"}, [heading1, heading2])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
