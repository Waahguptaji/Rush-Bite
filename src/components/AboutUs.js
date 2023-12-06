import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component did mount");
  }

  render() {
    console.log("Parent renders");
    return (
      <div className="aboutUs">
        <h1>Welcome to About Us</h1>
        <h2>I am builiding Food App</h2>
        <UserClass name={"First"} />
      </div>
    );
  }
}

// const AboutUs = () => {
//   return (
//     <div className="aboutUs">
//       <h1>Welcome to About Us</h1>
//       <h2>I am builiding Food App</h2>
//       <UserClass name={"Sahil Gupta(Class)"} />
//     </div>
//   );
// };

export default AboutUs;
