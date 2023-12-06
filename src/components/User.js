import { useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <button
        onClick={() => {
          setCount(2);
          setCount2(0);
        }}
      >
        Click Here
      </button>
      <h2>Name: {name} </h2>
      <h3>Location: Indore</h3>
      <h4>Contact: @waahguptaji </h4>
    </div>
  );
};

export default User;
