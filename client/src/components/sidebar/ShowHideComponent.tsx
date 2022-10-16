import iconhide from "../../assets/icon-hide-sidebar.svg";
export default function ShowHideComponent() {
  return (
    <div className="show_hide_SideBar_Container">
      <img src={iconhide} alt="" className="icon_Hide_Img" />
      <div className="hide_SideBar_Container">
        <p className="hide_SideBar_Text">Hide Sidebar</p>
      </div>
    </div>
  );
}
