import React from "react";
import "./App.css";
import Button from "./components/Button";
function App() {
  return (
    <div id="main" className="flex flex-row justify-center items-end h-screen bg-white">
      <div className="flex border-2 border-black flex-row mb-5 py-3 px-3 rounded-lg justify-around bg-zinc-400">
        <Button color={"red-400"} text={"Red"} />
        <Button color={"yellow-400"} text={"Yellow"} />
        <Button color={"pink-400"} text={"Pink"} />
        <Button color={"purple-400"} text={"Purple"} />
        <Button color={"green-400"} text={"Green"} />
        <Button color={"blue-400"} text={"Blue"} />
        <Button color={"white"} text={"Default"} />
      </div>
    </div>
  );
}

export default App;
