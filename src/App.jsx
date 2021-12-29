import React, { useState } from "react";

const App1 = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    mob:"",
  });

  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form submitted");
  };

  const inputEvent = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);

    const value = e.target.value;
    const name = e.target.name;

    setFullName((preValue) => {
      // console.log(preValue);
      if (name === "fName") {
        return { fname: value, lname: preValue.lname ,email:preValue.email,mob:preValue.mob};
      } else if (name === "lName") {
        return { fname: preValue.fname, lname: value ,email:preValue.email,mob:preValue.mob};
      }else if (name === "Email") {
        return { fname: preValue.fname, lname: preValue.lname ,email: value ,mob:preValue.mob};
      }else if (name === "Mob") {
        return { fname: preValue.fname, lname: preValue.lname, email:preValue.email,mob: value };
      }
    });
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmits}>
          <h1>
            Hello {fullName.fname} {fullName.lname}
          </h1>
          <p>{fullName.email}</p>
          <p>{fullName.mob}</p>
          <input
            type="text"
            placeholder="Enter Your first name"
            name="fName"
            onChange={inputEvent}
            value={fullName.fname}
            autoComplete="off"
          />
          <br />
          <input
            type="text"
            placeholder="Enter Your last name"
            name="lName"
            onChange={inputEvent}
            value={fullName.lname}
            autoComplete="off"
          />
          <br/>
            <input
            type="text"
            placeholder="Enter Your Email"
            name="Email"
            onChange={inputEvent}
            value={fullName.email}
            autoComplete="off"
          />
          <br/> 
          <input
          type="text"
          placeholder="Enter Your Mob no."
          name="Mob"
          onChange={inputEvent}
          value={fullName.mob}
          autoComplete="off"
        />
        <br/>
          <button type="submit">Click Me👍</button>
        </form>
      </div>
    </>
  );
};
export default App1;