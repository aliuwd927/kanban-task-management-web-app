import { useEffect, useReducer } from "react";
import "./App.css";
import KanbanInfo from "./kanbanContextProvider";
import { Task, Root } from "./components/TS Interface JSON/starterInterface";
import { ActionType } from "./components/TS Interface JSON/actionInterface";
import { Inital } from "./components/TS Interface JSON/initalInterface";
import HeaderTask from "./components/header/Header";
import TaskContainer from "./components/header/TaskContainer";
import SideBarComponent from "./components/sidebar/SideBarComponent";
//Also make sure implement ZOD for input validation

const initalState: Inital = {
  storeData: {} as Root,
  boardName: "",
  modalTaskArr: {} as Task,
};

const reducer = (state: Inital, action: ActionType): Inital => {
  switch (action.type) {
    case "STOREAPI":
      return { ...state, storeData: action.data };
    case "STORETEXT":
      return { ...state, boardName: action.boardValue };
    case "STOREMODALARRAY":
      return { ...state, modalTaskArr: action.elementItems };
    case "MOVETASK":
      let dragged: Task | null = null;
      const { fromDrag, toDrop } = action.subtask;

      let boardArr = state.storeData.boards ?? [];

      //we use find to target the correct board, instead of all of the board.

      //remove dragged element
      let columns = boardArr
        ?.find((element) => element?.name === state?.boardName)
        ?.columns.map((column) => {
          if (column.name !== fromDrag.column) return column;

          dragged = column.tasks[fromDrag.index];
          let newTask = column.tasks.filter(
            (element, index) => index !== fromDrag.index
          );

          return { ...column, tasks: newTask };
        });

      columns = columns?.map((column) => {
        if (column.name !== toDrop.column) return column;

        let newTask = [...column.tasks];
        newTask.splice(toDrop.index, 0, {
          ...dragged!,
          status: toDrop.column,
        });

        return { ...column, tasks: newTask };
      });

      if (!columns) throw new Error("NO COLUMNS");

      return {
        ...state,
        storeData: {
          boards: boardArr.map((board) => {
            if (board.name === state.boardName) {
              return { ...board, columns: columns! };
            } else {
              return board;
            }
            // check if board.name ==state.boardName
            // if so, update board with{...board, columns}
            // else board
          }),
        },
      };
    default:
      return state;
  }
};
/**
 *
 * Onload, useEffect will get the local json file
 * It will be stored directly into our useContext
 * state.store.data.boards is how we are referencing out stored data on load
 * we can then modify and update as we wish, without affect the json file locally
 *
 */
function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  useEffect(() => {
    let data: Root = require("../src/starter-code/data.json");
    //action.data needs to be returned on line 16
    //action is an object
    //action has two properties, type and data
    //spread the state, target storeData and use action.data due to line 30.
    let action: ActionType = { type: "STOREAPI", data };
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

{
  /**

let board = boardArr
        ?.find((element) => element?.name === state?.boardName)
        ?.columns.map((column) => {
          if (column.name !== fromDrag.column) return column;

          dragged = column.tasks[fromDrag.index];
          const newTask = column.tasks.filter(
            (element, index) => index !== fromDrag.index
          );

          return { ...column, tasks: newTask };
        });



        board = boardArr
        ?.find((element) => element?.name === state?.boardName)
        ?.columns.map((column) => {
          if (column.name !== toDrop.column) return column;

          const newTask = [...column.tasks];
          newTask.splice(toDrop.index, 0, {
            ...dragged!,
            status: toDrop.column,
          });

          return { ...column, tasks: newTask };
        });
*/
}

{
  /**
let board = boardArr.map((element) => {
        return element.columns.map((column) => {
          if (column.name !== fromDrag.column) return column;

          dragged = column.tasks[fromDrag.index];
          const newTask = column.tasks.filter(
            (element, index) => index !== fromDrag.index
          );

          return { ...column, tasks: newTask };
        });
      });

      //add dragged element
      board = boardArr.map((element) => {
        return element.columns.map((column) => {
          if (column.name !== toDrop.column) return column;

          const newTask = [...column.tasks];
          newTask.splice(toDrop.index, 0, {
            ...dragged!,
            status: toDrop.column,
          });

          return { ...column, tasks: newTask };
        });
      });


*/
}
