import React, { useContext, useState } from "react";
import { Task } from "../TS Interface JSON/starterInterface";
import KanbanInfo from "../../kanbanContextProvider";
import TestModal from "./modal";
import { ActionType } from "../TS Interface JSON/actionInterface";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Contstants";

export default function TaskComponent() {
  const [state, dispatch] = useContext(KanbanInfo)!;
  const [isOpen, setIsOpen] = useState(false);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.SUBTASK,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const boardArr = state?.storeData?.boards;

  let [colArr] =
    boardArr
      ?.filter((element) => element?.name === state?.boardName)
      .map((element) => {
        return element?.columns;
      }) ?? [];

  function changeModalStatus() {
    //based on onClick this will change
    //set State
    //isOpen will be changed to either T / F

    setIsOpen(!isOpen);
  }

  function storeGModalArr(elementItems: Task) {
    let action: ActionType = { type: "STOREMODALARRAY", elementItems };
    dispatch(action);
  }

  /**
   *
   * onClick --> Done
   * take element from what we clicked --> Done
   * store it to globalContext ( avoid prop drilling ) --> Done
   * render from globalContext to our modal
   * update TS for modalTaskArr --> Done
   */

  let displayTaskArray = colArr?.map((element) => {
    let taskArray = element?.tasks?.map((element, index) => {
      let subTasks = element?.subtasks?.length;
      let isCompletedCount = element?.subtasks.filter((element) => {
        return element.isCompleted;
      }).length;

      return (
        <div
          key={index}
          ref={drag}
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: "move",
          }}
        >
          <div
            className="task_Title"
            onDoubleClick={() => {
              changeModalStatus();
              storeGModalArr(element);
            }}
          >
            {element.title}
            <div>{`${isCompletedCount} of ${subTasks} SubTask`}</div>
          </div>
        </div>
      );
    });
    return (
      <div className="inner_Task_Column_Container">
        <div className={`status_Name_Container`}>{element.name}</div>
        <div className="subTask_Container">{taskArray}</div>
      </div>
    );
  });

  return (
    <div className="task_Column">
      <>{displayTaskArray}</>

      <TestModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

{
  /*

https://dndkit.com/

Drag and Drop Components

*/
}

{
  /*
    micheaaa: now that i have a better idea of what you are trying to do. 
              i think you can do what you were doing, but use a foreach, for of, reduce, etc instead of the inner map
              basically use a different way of iterating in order to calculate the isCompletedCount

              !!!a better method of breaking the problem into components will need to be thought of, but you will figure these things out!!!

*/
}

{
  /*

SubTask Logic

Todo: if false > true todo = todo

Doing: if true > false && false !== 0 = doing

Done: if true > false && false === 0 = done

*/
}

// Code Reset

{
  /**
 * 
 * 
      let isCompletedCount = element?.subtasks.filter((element) => {
        return element.isCompleted;
      });
      let notCompletedCount = element?.subtasks.filter((element) => {
        return !element.isCompleted;
      });
      console.log("Completed", isCompletedCount);
      console.log("Not Completed", notCompletedCount);
 */
}

//https://gist.github.com/micheaaa/caed38d2125177900bee080a2244587d
//Refactor code.
