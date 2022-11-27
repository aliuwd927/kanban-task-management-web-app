import { useContext } from "react";
import KanbanInfo from "../../kanbanContextProvider";
import { Menu } from "@headlessui/react";
export default function DropDownStatus() {
  const [state, dispatch] = useContext(KanbanInfo)!;

  let statusArr =
    state?.storeData?.boards
      ?.filter((element) => element?.name === state?.boardName)
      .map((element) => {
        return element?.columns?.map((element, index) => {
          if (element?.name !== state?.modalTaskArr?.status) {
            return <div key={index}>{element?.name}</div>;
          }
        });
      }) ?? [];

  console.log(statusArr);

  return (
    <Menu>
      <Menu.Button>{state.modalTaskArr.status}</Menu.Button>
      <Menu.Items>{statusArr}</Menu.Items>
    </Menu>
  );
}
