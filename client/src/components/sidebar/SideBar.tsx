import React from "react";
import logodark from "../../assets/logo-dark.svg";
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
      <div className="theme_Container"></div>
      <div className="show_hide_SideBar_Container"></div>
    </div>
  );
}
