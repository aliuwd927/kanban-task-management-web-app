import { useContext } from "react";
import KanbanInfo from "../../kanbanContextProvider";
export default function BoardInfoComponent() {
  const [state, dispatch] = useContext(KanbanInfo)!;
  const boardArr = state?.storeData?.boards;

  //Testing Things
  boardArr?.map((element) => {
    if (state.boardName === element.name) {
      //console.log(element.columns);
    }
  });


  /*

  ad0ran: its like the || but only against undefined/null values
  const [colArray] = boardArray?.map() ?? [];
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation

  */

  // let [colArr] =
  //   boardArr?.map((element) => {
  //     if(state.boardName === element.name){
  //       //console.log(element)
  //       return element?.columns;
  //     }
  //   }) ?? [];

  let [colArr] = boardArr?.filter(element => element.name === state.boardName).map(element => {
    return element?.columns
  }) ?? []

  console.log(colArr)
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
