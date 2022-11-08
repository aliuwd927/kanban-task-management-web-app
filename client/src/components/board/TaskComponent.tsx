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

  let subTasks = colArr?.map((element) => {
    let subArr = element?.tasks?.map((element) => {
      let lengthOfTask = element?.subtasks?.length;
      return lengthOfTask;
    });
    return subArr;
  });

  let displayTaskArray = colArr?.map((element) => {
    let taskArray = element?.tasks?.map((element) => {
      return <div className="task_Title">{element.title}</div>;
    });
    return (
      <div className="inner_Task_Column_Container">
        <div className={`status_Name_Container`}>{element.name}</div>
        <div>{taskArray}</div>
        <div>{subTasks}</div>
      </div>
    );
  });

  //Put this map within subtasks.

  console.log(subTasks);
  //console.log(subLength);
  return <div className="task_Column">{displayTaskArray}</div>;
}

{
  /*

tutschei: Make a Component for the Card
tutschei: And pass the length in

*/
}
