import React from "react";
import logodark from "../../assets/logo-dark.svg";
import iconlighttheme from "../../assets/icon-light-theme.svg";
import icondarktheme from "../../assets/icon-dark-theme.svg";
import iconhide from "../../assets/icon-hide-sidebar.svg";

export default function SideBar() {
  let data = require("../../starter-code/data.json");
  let sideBarData = data.boards;
  console.log(sideBarData);
  return (
    <div className="side_Bar_Container">
      <img src={logodark} alt="" />
      <div className="board_Container">
        <div>All Boards</div>
        {sideBarData.map((element: any, index: number) => {
          return <div key={index}>{element.name}</div>;
        })}
        <div>Create a Board</div>
      </div>
      <div className="theme_Container">
        <img src={iconlighttheme} alt="" />
        <input
          className="slide_Toggle"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label className="switch_Label" htmlFor={`react-switch-new`}>
          <span className={`switch_Button`} />
        </label>
        <img src={icondarktheme} alt="" />
      </div>
      <div className="show_hide_SideBar_Container">
        <img src={iconhide} alt="" />
        <div>
          <p className="hide_SideBar_Text">Hide Sidebar</p>
        </div>
      </div>
    </div>
  );
}
