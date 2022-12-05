import type { Identifier, XYCoord } from "dnd-core";
import { useContext, useMemo, useRef, useState } from "react";
import { Task } from "../TS Interface JSON/starterInterface";
import KanbanInfo from "../../kanbanContextProvider";
import TestModal from "./modal";
import { ActionType } from "../TS Interface JSON/actionInterface";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./Contstants";

export interface TaskProps {
  data: Task;
  // taskObj: Task;
  index: number;
  changeModalStatus: () => void;
  storeGModalArr: (elementItems: Task) => void;
  updateSubTask: (item: TaskProps) => void;
}

function calcuateCompleteSubTask(subtasks: Task["subtasks"]) {
  let count = 0;
  subtasks.forEach((task) => {
    if (task.isCompleted) {
      count++;
    }
  });
  return count;
}

function SubTaskComponent({
  data,
  // taskObj,
  index,
  changeModalStatus,
  storeGModalArr,
  updateSubTask,
}: TaskProps) {
  const isCompletedCount = useMemo(() => {
    return calcuateCompleteSubTask(data.subtasks);
  }, [data.subtasks]);
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.SUBTASK,
    item: () => {
      // const { title, description, status, subtasks } = taskObj;
      // return { title, description, status, subtasks };
      return { index };
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.SUBTASK,
    drop: (index: TaskProps) => {
      updateSubTask(index);
    },
    hover: (item: TaskProps, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundRect.bottom - hoverBoundRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      item.index = hoverIndex;
    },
  }));

  drag(drop(ref));
  return (
    <div
      className="task_Title"
      onDoubleClick={() => {
        changeModalStatus();
        storeGModalArr(data);
      }}
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      {data.title}
      <div>{`${isCompletedCount} of ${data.subtasks.length} SubTask`}</div>
    </div>
  );
}

export default function TaskComponent() {
  const [state, dispatch] = useContext(KanbanInfo)!;
  const [isOpen, setIsOpen] = useState(false);

  const boardArr = state?.storeData?.boards;

  const board = boardArr?.find(
    (element) => element?.name === state?.boardName
  )?.columns;

  const updateSubTask = (item: TaskProps) => {
    //Update State

    //We can use status to match
    console.log(item.index);

    //Rtns a list of task based by item status

    //Figure out how to rearrange items
  };

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
    <div className="task_Column">
      {board?.map((column) => {
        return (
          <div key={column.name} className="inner_Task_Column_Container">
            <div className={`status_Name_Container`}>{column.name}</div>
            <div className="subTask_Container">
              {column?.tasks.map((task, index) => (
                <SubTaskComponent
                  key={task.title}
                  // taskObj={task}
                  index={index}
                  data={task}
                  changeModalStatus={changeModalStatus}
                  storeGModalArr={storeGModalArr}
                  updateSubTask={updateSubTask}
                />
              ))}
            </div>
          </div>
        );
      })}
      <TestModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

//https://gist.github.com/micheaaa/caed38d2125177900bee080a2244587d
//Refactor code.

{
  /*
   
  We Need to Track out element

  We need to grab columns

  Each column will be tracked



   */
}

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
