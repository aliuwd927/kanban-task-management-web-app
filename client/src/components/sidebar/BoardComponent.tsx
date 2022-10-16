import { Root } from "../TS Interface JSON/starterInterface";
export default function BoardComponent() {
  let data: Root = require("../../starter-code/data.json");
  let sideBarData = data.boards;
  return (
    <div className="board_Container">
      <div className="all_Boards_Text">All Boards</div>
      {sideBarData.map((element, index: number) => {
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
