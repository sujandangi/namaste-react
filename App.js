const heading = React.createElement("div", {}, 
[
React.createElement("div", {}, React.createElement("h2", {}, "Hello from React Child1!")), 
React.createElement("h2", {}, "Hello from React Child2!")
])



const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(typeof(heading)) //object
console.log(typeof(root)) //object
console.log(root.render)
root.render(heading)