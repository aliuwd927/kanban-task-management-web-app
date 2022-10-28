import BoardEmpty from "../board/BoardEmpty";
import KanbanInfo from "../../kanbanContextProvider";
import { useContext } from "react";
import BoardInfoComponent from "../board/BoardInfoContainer";
export default function TaskContainer() {
  const [state, dispatch] = useContext(KanbanInfo)!;
  const isApiEmpty =
    state === undefined ? <BoardEmpty /> : <BoardInfoComponent />;

  return <div className="task_Container">{isApiEmpty}</div>;
}
