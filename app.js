import React from "react"; //importing React from node module 
import ReactDOM from "react-dom/client"; //importing React from node module of react

//React Element
const jsxHeading =(
    <h1 id="heading" className="head" tabIndex="1">
      Namaste Sahil using JSX🚀
    </h1>
);

const title = (
    <h1>
        {jsxHeading}
        This is the Title 
    </h1>
);

//Component Composition
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1 className="heading">Namaste React Functional Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);