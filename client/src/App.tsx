import "./App.css";
import HeaderTask from "./components/header/Header";
import TaskContainer from "./components/header/TaskContainer";
import SideBarComponent from "./components/sidebar/SideBarComponent";

function App() {
  return (
    <div className="App">
      <SideBarComponent />
      <div className="task_Section_Container">
        <HeaderTask />
        <TaskContainer />
      </div>
    </div>
  );
}

export default App;
//https://frontend.turing.edu/lessons/module-3/advanced-react-hooks.html
