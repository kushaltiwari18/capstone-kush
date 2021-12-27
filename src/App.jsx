import React, { useState } from "react";
 const App=()=>{
 const [name ,setName]=useState();
 const [fullName,setFullname]=useState();


    const inputEvent=(e)=>{
       setName( e.target.value);

    };
     const input=()=>{
         setFullname(name);
        };
    return(
        <>
        <h1>Hii {fullName}</h1>
        <input type="text" placeholder="Enter your name" value={name} onChange={inputEvent}/>
                <button onClick={input}>Submit</button>
        </>
    );
 };

 export default App;
