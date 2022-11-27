import { Menu } from "@headlessui/react";

const links = [{ label: "Edit Board" }, { label: "Delete Board" }];

export default function MenuAddTask() {
  return (
    <Menu>
      <div className="add_task_Container">
        <Menu.Button className="add_Task">Add New Task</Menu.Button>

        <Menu.Items className="list_label_Container">
          {links.map((link, index) => (
            <Menu.Item as="div" className="list_label" key={index}>
              {link.label}
            </Menu.Item>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
}
