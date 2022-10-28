import { useContext } from "react";
import KanbanInfo from "../../kanbanContextProvider";
export default function BoardInfoComponent() {
  const [state, dispatch] = useContext(KanbanInfo)!;
  const boardArr = state?.storeData?.boards;

  /*

  ad0ran: its like the || but only against undefined/null values
  const [colArray] = boardArray?.map() ?? [];
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation

  */

  const [colArr] =
    boardArr?.map((element) => {
      console.log(element.columns);
      return element?.columns;
    }) ?? [];
  return (
    <div className="task_Column">
      {colArr?.map((element) => {
        return (
          <div className={`${element.name}_Container`}>{element?.name}</div>
        );
      })}
    </div>
  );
}
