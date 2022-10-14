import iconEllipsis from "../../assets/icon-vertical-ellipsis.svg";
import TaskContainer from "./TaskContainer";

export default function HeaderTask() {
  return (
    <div className="header_Add_Task_Container">
      <h2>Platform Launch</h2>
      <div className="add_task_Container">
        <button className="add_Task">Add New Task</button>
        <img src={iconEllipsis} alt="" />
      </div>
    </div>
  );
}
