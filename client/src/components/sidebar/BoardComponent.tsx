import KanbanInfo from "../../kanbanContextProvider";
import { MouseEvent, useContext, useEffect } from "react";
import { ActionType } from "../TS Interface JSON/actionInterface";


export default function BoardComponent() {
  const [state, dispatch] = useContext(KanbanInfo)!;
  const sideElement = state?.storeData.boards;
  const boardArr = sideElement
  // We need to dispatch an action
  // This action will return the correct elements based on project


  const handleStoreText = (e: MouseEvent) => {
    //console.log(e)
    let boardValue = e.currentTarget.id;
    let action: ActionType = { type: "STORETEXT", boardValue };
    dispatch(action);
    handleColumnArray()
  };

  const handleColumnArray = () =>{

    let [[colArr]] =
    boardArr
      ?.filter((element) => element.name === state.boardName)
      .map((element) => {
        return element?.columns;
      }) ?? [];

      let storeAction: ActionType = { type: "STORECOLUMNARRAY", colArr}
      dispatch(storeAction)
  }

  const boardText = sideElement?.map((element, index) => {
    return (
      <div
        key={index}
        className="board_Button"
        id={element.name}
        onClick={handleStoreText}
      >
        {element.name}
      </div>
    );
  });
  return (
    <div className="board_Container">
      <div className="all_Boards_Text">All Boards</div>
      {boardText}
      <div className="create_a_board_Text">+ Create a Board</div>
    </div>
  );
}
