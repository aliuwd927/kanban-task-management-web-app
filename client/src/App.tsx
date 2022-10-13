import React from "react";
import "./App.css";
import HeaderTask from "./components/header/Header";
import TaskContainer from "./components/header/TaskContainer";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="task_Section_Container">
        <HeaderTask />
        <TaskContainer />
      </div>
    </div>
  );
}

export default App;
