import KanbanInfo from "../../kanbanContextProvider";
import { useContext } from "react";
export default function BoardComponent() {
  const [state, dispatch] = useContext(KanbanInfo)!;
  const sideElement = state?.storeData.boards;

  return (
    <div className="board_Container">
      <div className="all_Boards_Text">All Boards</div>
      {sideElement?.map((element, index) => {
        return (
          <div key={index} className="board_Button">
            {element.name}
          </div>
        );
      })}
      <div className="create_a_board_Text">+ Create a Board</div>
    </div>
  );
}
