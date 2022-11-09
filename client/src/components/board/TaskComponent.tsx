import { useContext } from "react";
import KanbanInfo from "../../kanbanContextProvider";

export default function TaskComponent() {
  const [state, dispatch] = useContext(KanbanInfo)!;
  const boardArr = state?.storeData?.boards;

  let [colArr] =
    boardArr
      ?.filter((element) => element?.name === state?.boardName)
      .map((element) => {
        return element?.columns;
      }) ?? [];



  let displayTaskArray = colArr?.map((element) => {
    let taskArray = element?.tasks?.map((element) => {
      let subTasks = element?.subtasks?.length;
      return (
      <div className="task_Title">
        {element.title}
        <div>{subTasks} subtasks</div>
        </div>
      );
    });
    return (
      <div className="inner_Task_Column_Container">
        <div className={`status_Name_Container`}>{element.name}</div>
        <div>{taskArray}</div>
      </div>
    );
  });

  return <div className="task_Column">{displayTaskArray}</div>;
}

