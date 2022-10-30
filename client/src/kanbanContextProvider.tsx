import { createContext } from "react";
import { Inital } from "./components/TS Interface JSON/initalInterface";
import { ActionType } from "./components/TS Interface JSON/actionInterface";

const KanbanInfo = createContext<
  [Inital, React.Dispatch<ActionType>] | undefined
>(undefined);

export default KanbanInfo;
