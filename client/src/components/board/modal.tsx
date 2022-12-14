import { useContext } from "react";
import { Dialog } from "@headlessui/react";
import KanbanInfo from "../../kanbanContextProvider";
import DropDownStatus from "./dropdrownstatus";

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function TestModal(props: ModalProps) {
  const [state, dispatch] = useContext(KanbanInfo)!;

  let subTaskTitles = state?.modalTaskArr?.subtasks?.map((element, index) => {
    return (
      <div key={index}>
        <input
          type="checkbox"
          aria-label={element?.title}
          defaultChecked={element?.isCompleted}
        />
        <label htmlFor="">{element?.title}</label>
      </div>
    );
  });
  return (
    <Dialog
      open={props.isOpen}
      onClose={() => props.setIsOpen(props.isOpen)}
      className="modal_Container"
    >
      <div className="modal_Container_Dialog_Panel">
        <Dialog.Panel>
          <Dialog.Title>{state.modalTaskArr.title}</Dialog.Title>
          <Dialog.Description>
            {state.modalTaskArr.description}
          </Dialog.Description>
          {subTaskTitles}
          <button onClick={() => props.setIsOpen(!props.isOpen)}>Close</button>
          <DropDownStatus />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

//https://codesandbox.io/s/quizzical-antonelli-o5oo8g
