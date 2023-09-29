import React from "react"; //importing React from node module 
import ReactDOM from "react-dom/client"; //importing React from node module of react

const parent = React.createElement("div",
    { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am a h1 tag"),
        React.createElement("h2", {}, "I am a h2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am a h1 tag"),
        React.createElement("h2", {}, "I am a h2 tag")
    ]),
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);