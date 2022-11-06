
import { useContext } from "react";
import { start } from "repl";

import KanbanInfo from "../../kanbanContextProvider";
import { ActionType } from "../TS Interface JSON/actionInterface";


export default function TaskComponent(){
    const [state, dispatch] = useContext(KanbanInfo)!;
    const boardArr = state?.storeData?.boards


    // let [[colArr]] =
    // boardArr
    //   ?.filter((element) => element.name === state.boardName)
    //   .map((element) => {
    //     return element?.columns;
    //   }) ?? [];

    //   let storeAction: ActionType = { type: "STORECOLUMNARRAY", colArr}
    //   dispatch(storeAction)





    return(
        <div>
            <div></div>
        </div>
    )
}