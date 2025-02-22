import { useState } from "react";
import React from "react";
import "tailwindcss";

function App() {
  const [color, setColor] = useState("white");
  return (
    <div
      className=" fixed  w-screen h-screen duration-200 "
      // style={{ backgroundColor: color }}
    >
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <h1 
      style={{color: color}}
      className="fixed flex flex-wrap justify-center top-10 inset-x-2 text-black">Click down the button to change the color of the Text</h1>
        <div className="flex flex-wrap justify-center gap-2 shadow-2xs bg-white rounded px-3 py-2">
          <button
            className="outline-none px-4 py-1 rounded-full shadow-large"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-large text-black"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-large"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-large"
            style={{ backgroundColor: "grey" }}
            onClick={() => setColor("grey")}
          >
            Grey
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full shadow-large"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
