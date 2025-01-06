import React, { useEffect, useRef, useState } from "react";

export const Useref = () => {
  var [text, settext] = useState("");

  var pretext = useRef("");
  useEffect(() => {
    pretext.current = text;
  }, [text]);

  return (
    <>
      <h1>This is an example for Useref</h1>
      <div>
        <input
          type="number"
          value={text}
          onChange={(e) => settext(e.target.value)} 
          style={{borderRadius:"3px solid black"}}
        />
        <h2>My current text is {text}</h2>
        <h3>My Previous text is {pretext.current}</h3>
      </div>
    </>
  );
};
