import { useContext } from "react";
import KanbanInfo from "../../kanbanContextProvider";
import TaskComponent from "./TaskComponent";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function BoardInfoComponent() {
  const [state, dispatch] = useContext(KanbanInfo)!;

  /*

  ad0ran: its like the || but only against undefined/null values
  const [colArray] = boardArray?.map() ?? [];
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation

  */

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="task_Column_Container">
        <TaskComponent />
      </div>
    </DndProvider>
  );
}

// Reset Code

{
  /*

export default function BoardInfoComponent() {
  const [state, dispatch] = useContext(KanbanInfo)!;
  const boardArr = state?.storeData?.boards;

  //Testing Things
  // boardArr?.map((element) => {
  //   if (state.boardName === element.name) {
  //     //console.log(element.columns);
  //   }
  // });

  

  ad0ran: its like the || but only against undefined/null values
  const [colArray] = boardArray?.map() ?? [];
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation

  

  let [colArr] =
    boardArr
      ?.filter((element) => element.name === state.boardName)
      .map((element) => {
        const coltaskArr = element?.columns;
        // const colTask = coltaskArr?.map((tasks) => {
        //   // console.log(tasks);
        //   return tasks?.name;
        // });
        return [element?.columns];
      }) ?? [];

  console.log(colArr)

  return (
    <div className="task_Column">
      {colArr?.map((element) => {
        let test = element?.map((innerElement) => {
          //console.log(innerElement.tasks);
          return (
            <div className="inner_Task_Column_Container">
              <div>{innerElement?.name}</div>
              <div className="task_Title_Container">
                {innerElement?.tasks?.map((element) => {
                  //console.log(element?.subtasks);
                  return (
                    <div className="task_Title">
                      {element?.title}
                      <div>
                      

                        { 
                          1) We have to break every piece into an component of its own and nest them.
                          2) We need to utilize dispatch for nested Array in the subs of sub arrays.
                        }

                       
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        });
        return test;
      })}
    </div>
  );
}

*/
}
