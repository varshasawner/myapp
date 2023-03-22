import { useState } from 'react';

function StateTask() {

//   let name = "varsha";

  const [name, setName] = useState("varsha");

  const updateName = () => {
    // name = "harsha";
    setName("harsha");
    // console.log(name);
  }
  console.log("......................");

  return (
    <div className="App">
      {/* <Navigation /> */}
      <h1>{name}</h1>
      <button onClick={updateName}>CLick me</button>

    </div>
  );
}

export default StateTask;
