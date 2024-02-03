// const heading = React.createElement("h1", {},"Hello World!");

// const heading = React.createElement("h1", {title: "title"}, "Hello From React App");
// const heading1 = React.createElement("h1", {title:"sub_title"}, "Hello From Namaste React App");

// const container = React.createElement("div",{title:"container"},[heading, heading1]);

const heading = React.createElement("div", {title:"parent"}, React.createElement("div", {title:"child"},React.createElement("h1", {title:"title"},  "Hello From React App")));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

