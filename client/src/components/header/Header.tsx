import iconEllipsis from "../../assets/icon-vertical-ellipsis.svg";
import MenuAddTask from "./MenuAddTask";




export default function HeaderTask() {
  return (
    <div className="header_Add_Task_Container">
      <h2>Platform Launch</h2>
      <div className="add_Task_Container_Container">
        <MenuAddTask/>
        <div className="icon_Ellipsis_Container">
          <img src={iconEllipsis} alt="" />
        </div>
      </div>
    </div>
  );
}
