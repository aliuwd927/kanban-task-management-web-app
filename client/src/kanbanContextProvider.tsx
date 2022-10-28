import { createContext } from "react";
import { Inital } from "./components/TS Interface JSON/initalInterface";
import { Action } from "./components/TS Interface JSON/actionInterface";

const KanbanInfo = createContext<[Inital, React.Dispatch<Action>] | undefined>(
  undefined
);

export default KanbanInfo;
