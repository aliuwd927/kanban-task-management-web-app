import { Root } from "./starterInterface";

export type ActionType =
  | { type: "STOREAPI"; data: Root }
  | { type: "STORETEXT"; boardValue: string }; // Figure this out later, number,string, string[] || number []??
