import logodark from "../../assets/logo-dark.svg";
import iconlighttheme from "../../assets/icon-light-theme.svg";
import icondarktheme from "../../assets/icon-dark-theme.svg";
import iconhide from "../../assets/icon-hide-sidebar.svg";
import { Root } from "../TS Interface JSON/starterInterface";

export default function SideBar() {
  let data: Root = require("../../starter-code/data.json");
  let sideBarData = data.boards;
  console.log(sideBarData);
  return (
    <div className="side_Bar_Container">
      <img src={logodark} alt="" className="logoDark_Img" />
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
      <div className="theme_Container">
        <img src={iconlighttheme} alt="" className="icon_Light_Theme_Img" />
        <div className="overlay"></div>
        <input
          className="slide_Toggle"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label className="switch_Label" htmlFor={`react-switch-new`}>
          <span className={`switch_Button`} />
        </label>
        <img src={icondarktheme} alt="" className="icon_Dark_Theme_Img" />
      </div>
      <div className="show_hide_SideBar_Container">
        <img src={iconhide} alt="" className="icon_Hide_Img" />
        <div className="hide_SideBar_Container">
          <p className="hide_SideBar_Text">Hide Sidebar</p>
        </div>
      </div>
    </div>
  );
}
