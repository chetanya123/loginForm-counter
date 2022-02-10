import { useState } from "react";

//const stateName=useState(defaultValue);

function Counter() {
  // const counterState = useState(0); //[0,fn()]
  const [count, setCount] = useState(0);
  // const count = counterState[0]; //0
  // const setCount = counterState[1]; //function/way to change count variable

  function incrementCount() {
    //setCount(previousRememberedState=>{pre})
    setCount((previousRememberedCount) => previousRememberedCount + 1);
    setCount((previousRememberedCount) => previousRememberedCount + 1);
    setCount((previousRememberedCount) => previousRememberedCount + 1);
  }

  return (
    <>
      <h1>The count is {count}</h1>
      <button
        onClick={() => {
          incrementCount();
        }}
      >
        Increment Count
      </button>
    </>
  );
}

export default Counter;

//Functions
