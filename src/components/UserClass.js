//Makin a Class Based Component
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };

    console.log(this.props.name + "Child Constructor");
  }

  //making it async for the api call
  async componentDidMount() {
    console.log(this.props.name + "Child Component did mount");
    const data = await fetch("https://api.github.com/users/waahguptaji");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  //when component update after getting the api data this calls
  componentDidUpdate() {
    console.log("Component did Update");
  }

  //when we move to another component it means we are unmounting so this calls
  componentWillUnmount() {
    console.log("COmponent is unmounted");
  }

  render() {
    console.log(this.props.name + "Child Render");
    debugger;

    //Destructuring
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name} </h2>
        <img src={avatar_url}></img>
        <h3>Location: {location}</h3>
        <h4>Contact: @waahguptaji </h4>
      </div>
    );
  }
}

export default UserClass;
