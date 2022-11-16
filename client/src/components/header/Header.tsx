import { Fragment } from "react";
import iconEllipsis from "../../assets/icon-vertical-ellipsis.svg";
import { Menu } from "@headlessui/react";

const links = [{ label: "Edit Board" }, { label: "Delete Board" }];

export default function HeaderTask() {
  return (
    <div className="header_Add_Task_Container">
      <h2>Platform Launch</h2>
      <div className="add_Task_Container_Container">
        <Menu>
          <div className="add_task_Container">
            <Menu.Button className="add_Task">Add New Task</Menu.Button>

            <Menu.Items className="list_label_Container">
              {links.map((link) => (
                <Menu.Item as="div" className="list_label">
                  {link.label}
                </Menu.Item>
              ))}
            </Menu.Items>
          </div>
        </Menu>
        <div className="icon_Ellipsis_Container">
          <img src={iconEllipsis} alt="" />
        </div>
      </div>
    </div>
  );
}
