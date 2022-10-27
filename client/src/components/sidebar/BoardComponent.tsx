import { Root } from "../TS Interface JSON/starterInterface";
import KanbanInfo from "../../kanbanContextProvider";
import { useContext } from "react";
export default function BoardComponent() {
  const value: Root = useContext(KanbanInfo);
  // let data: Root = require("../../starter-code/data.json");
  // let sideBarData = data.boards;
  //console.log(sideBarData);

  return (
    <div className="board_Container">
      <div className="all_Boards_Text">All Boards</div>
      {/* {sideBarData.map((element, index: number) => {
        //console.log(element.columns[0].tasks[0].subtasks);
        return (
          <div key={index} className="board_Button">
            {element.name}
          </div>
        );
      })} */}
      <div className="create_a_board_Text">+ Create a Board</div>
    </div>
  );
}
