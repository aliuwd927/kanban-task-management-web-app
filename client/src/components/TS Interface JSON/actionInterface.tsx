import { Root, Task } from "./starterInterface";
import { TaskPosition } from "../board/SubTaskComponent";

export type ActionType =
  | { type: "STOREAPI"; data: Root }
  | { type: "STORETEXT"; boardValue: string } // Figure this out later, number,string, string[] || number []??
  | { type: "STOREMODALARRAY"; elementItems: Task }
  | {
      type: "MOVETASK";
      subtask: { fromDrag: TaskPosition; toDrop: TaskPosition };
    };
