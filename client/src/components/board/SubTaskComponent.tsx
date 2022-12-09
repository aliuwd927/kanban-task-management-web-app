import { useMemo, useRef } from "react";
import { Task } from "../TS Interface JSON/starterInterface";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./Contstants";

export interface TaskProps {
  data: Task;
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

export default function SubTaskComponent({
  data,
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
      return { index };
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  {
    /*
  Utitlize Index
  Need some sort of state
  Compare the state
  Updateing the State of The Index
  Then Re-Render
*/
  }

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.SUBTASK,
    drop: (index: TaskProps) => {
      updateSubTask(index);
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
