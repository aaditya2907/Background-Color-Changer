import React from "react";

function Button({ color, text }) {
  return (
    <div>
      <button
        className={`border-2 border-black py-1 px-3 mx-2 rounded-lg bg-${color}`}
        onClick={() => {
          document.getElementById("main").classList.remove(
              "bg-blue-400",
              "bg-green-400",
              "bg-purple-400",
              "bg-red-400",
              "bg-yellow-400",
              "bg-pink-400",
              "bg-white"
            );
          document.getElementById("main").classList.add(`bg-${color}`);
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
