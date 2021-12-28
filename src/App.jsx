import React, { useState } from "react";

const App1 = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();
  const [lastname, setLastName] = useState();
  const [lastNameNew, setLastNameNew] = useState("");

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastname);
  };

  const inputEvent = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmits}>
          <h1>
            Hello {fullName} {lastNameNew}
          </h1>
          <input
            type="text"
            placeholder="Enter Your first name"
            onChange={inputEvent}
            value={name}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your last name"
            onChange={inputEventTwo}
            value={lastname}
          />

          <button type="submit">Click Me👍</button>
        </form>
      </div>
    </>
  );
};
export default App1;