import { useContext, useMemo, useRef } from "react";
import { Task } from "../TS Interface JSON/starterInterface";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./Contstants";
import KanbanInfo from "../../kanbanContextProvider";

export interface TaskProps {
  data: Task;
  index: number;
  changeModalStatus: () => void;
  storeGModalArr: (elementItems: Task) => void;
}

export interface TaskPosition{
  column: string;
  index: number;
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

export default function SubTaskComponent({
  data,
  index,
  changeModalStatus,
  storeGModalArr,
}: TaskProps) {

  const [,dispatch] = useContext(KanbanInfo)!

  const isCompletedCount = useMemo(() => {
    return calcuateCompleteSubTask(data.subtasks);
  }, [data.subtasks]);

  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.SUBTASK,
    item: () => {
      return { column: data.status,index };
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }),[data.status,index]);

  {
    /*
  Utitlize Index
  Need some sort of state
  Compare the state
  Updateing the State of The Index
  Then Re-Render
*/
  }

  const [{isOver}, drop] = useDrop(() => ({
    accept: ItemTypes.SUBTASK,
    drop: (item: TaskPosition) => {
      //fromDrag grabs the current div we selected that we want to move
      const fromDrag = { column: item.column, index: item.index }

      //toDrop will update our State
      const toDrop = { column: data.status, index: index}

      dispatch({type: "MOVETASK", subtask:{fromDrag,toDrop} })
    },
    collect:(monitor)=>({
      isOver: !!monitor.isOver(),
    }),
  }),
  [data,index]
  );

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
        borderStyle: isOver ? 'dashed': undefined
      }}
    >
      {data.title}

      <div>{`${isCompletedCount} of ${data.subtasks.length} SubTask`}</div>

    </div>
  );
}
