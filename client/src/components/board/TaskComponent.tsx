import { useContext } from "react";
import KanbanInfo from "../../kanbanContextProvider";
import TaskColumn from "./TaskColumn";

export default function TaskComponent() {
  const [state] = useContext(KanbanInfo)!;

  const boardArr = state?.storeData?.boards;

  const board = boardArr?.find(
    (element) => element?.name === state?.boardName
  )?.columns;

  return (
    <div className="task_Column">
      {board?.map((column) => {
        return <TaskColumn key={column.name} column={column} />;
      })}
    </div>
  );
}

//https://gist.github.com/micheaaa/caed38d2125177900bee080a2244587d
//Refactor code.

{
  /**
   * 
   * micheaaa: One way to do this: you can implement dispatch({type: 'MOVE_TASK', 
   *                                                           data: {from: {column, index}, 
   *                                                           to: {column, index}}}). 
   * This action will remove the element in (from.column) at index (from.index) and move it to (to.column) at index (to.index)
   * 
      micheaaa: using the from and to, you can change the board
   */
}

//https://stackblitz.com/edit/vitejs-vite-znzfv5?file=src%2Fcomponents%2FTaskBoard.tsx,src%2Fcontext%2FStoreContext.tsx&terminal=dev

//We Made Notes Here....

//https://stackblitz.com/edit/vitejs-vite-nm5p71?file=src%2Fcomponents%2FTaskBoard.tsx&file=src%2Fcontext%2FStoreContext.tsx
