import { useContext, useState } from "react";
import { Task, Column } from "../TS Interface JSON/starterInterface";
import KanbanInfo from "../../kanbanContextProvider";
import TestModal from "./modal";
import { ActionType } from "../TS Interface JSON/actionInterface";
import { useDrop } from "react-dnd";
import SubTaskComponent, { TaskPosition } from "./SubTaskComponent";
import { ItemTypes } from "./Contstants";

export interface TaskColumnProps {
  column: Column;
}

export default function TaskColumn({ column }: TaskColumnProps) {
  const [, dispatch] = useContext(KanbanInfo)!;
  const [isOpen, setIsOpen] = useState(false);

  const[,drop] = useDrop(()=>({
    accept: ItemTypes.SUBTASK,
    drop:(item:TaskPosition,monitor)=>{
      if(monitor.didDrop()) return;

      const fromDrag = {column: item.column, index:item.index};
      const toDrop = {column: column.name, index: column.tasks.length};

      dispatch({type: "MOVETASK", subtask:{fromDrag,toDrop}})
    }
  }),[column])

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

  return (
    <div key={column.name} className="inner_Task_Column_Container">
      <div className={`status_Name_Container`}>{column.name}</div>
      <div className="subTask_Container">
        {column?.tasks.map((task, index) => (
          //This renders ALL SubTask Component
          <SubTaskComponent
            key={task.title}
            index={index}
            data={task}
            changeModalStatus={changeModalStatus}
            storeGModalArr={storeGModalArr}
          />
        ))}
      </div>
      <TestModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
