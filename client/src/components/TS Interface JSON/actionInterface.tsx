
import { Root,Column, Board } from "./starterInterface";

export type ActionType =
  | { type: "STOREAPI"; data: Root }
  | { type: "STORETEXT"; boardValue: string }// Figure this out later, number,string, string[] || number []??
  | { type: "STORECOLUMNARRAY"; colArr: Column}
