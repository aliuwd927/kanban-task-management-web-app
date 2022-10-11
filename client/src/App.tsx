import React from "react";
import "./App.css";
import HeaderTask from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <HeaderTask />
    </div>
  );
}

export default App;
