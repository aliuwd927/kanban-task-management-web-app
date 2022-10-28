import { useEffect, useReducer } from "react";
import "./App.css";
import KanbanInfo from "./kanbanContextProvider";
import { Root } from "./components/TS Interface JSON/starterInterface";
import { Action } from "./components/TS Interface JSON/actionInterface";
import { Inital } from "./components/TS Interface JSON/initalInterface";
import HeaderTask from "./components/header/Header";
import TaskContainer from "./components/header/TaskContainer";
import SideBarComponent from "./components/sidebar/SideBarComponent";
//Also make sure implement ZOD

const initalState: Inital = {
  storeData: {} as Root,
};

const reducer = (state: Inital, action: Action) => {
  switch (action.type) {
    case "STORE":
      return { ...state, storeData: action.data };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  useEffect(() => {
    let data: Root = require("../src/starter-code/data.json");
    //action.data needs to be returned on line 16
    //action is an object
    //action has two properties, type and data
    //spread the state, target storeData and use action.data due to line 30.
    let action = { type: "STORE", data };
    dispatch(action);
  }, []);

  return (
    <KanbanInfo.Provider value={[state, dispatch]}>
      <div className="App">
        <SideBarComponent />
        <div className="task_Section_Container">
          <HeaderTask />
          <TaskContainer />
        </div>
      </div>
    </KanbanInfo.Provider>
  );
}

export default App;
//https://frontend.turing.edu/lessons/module-3/advanced-react-hooks.html
