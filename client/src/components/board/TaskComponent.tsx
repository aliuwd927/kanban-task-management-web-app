import { MouseEvent,useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import KanbanInfo from "../../kanbanContextProvider";
import TestModal from "./modal";


export default function TaskComponent() {
  const [state, dispatch] = useContext(KanbanInfo)!;
  const [isOpen, setIsOpen] = useState(true);
  const boardArr = state?.storeData?.boards;

  let [colArr] =
    boardArr
      ?.filter((element) => element?.name === state?.boardName)
      .map((element) => {
        return element?.columns;
      }) ?? [];

  function changeModalStatus(){
    //based on onClick this will change
    //set State
    //isOpen will be changed to either T / F
    setIsOpen(!isOpen)
  }


  let displayTaskArray = colArr?.map((element) => {
    let taskArray = element?.tasks?.map((element) => {
      let subTasks = element?.subtasks?.length;
      let countTrue = 0;
      let countFalse = 0;
      let isCompletedCount = element?.subtasks.map((element)=>{
        element?.isCompleted === true ? countTrue++ : countFalse++
        //we can use isCompleted to return our values...but how...
      })
      // console.log(`${isCompletedCount}`)
      //console.log(`True:${countTrue}, False:${countFalse}`)
      return (
      <div className="task_Title" onClick={changeModalStatus}>
        {element.title}
        <div>{`${countFalse > countTrue ? 0 : countTrue} of ${subTasks} SubTask`}</div>
        </div>
      );
    });
    return (
      <div className="inner_Task_Column_Container">
        <div className={`status_Name_Container`}>{element.name}</div>
        <div>{taskArray}</div>
      </div>
    );
  });

  return (
  <div className="task_Column">
    {displayTaskArray}
    <TestModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>);
}

{/*

https://dndkit.com/

Drag and Drop Components

*/}


{/*
    micheaaa: now that i have a better idea of what you are trying to do. 
              i think you can do what you were doing, but use a foreach, for of, reduce, etc instead of the inner map
              basically use a different way of iterating in order to calculate the isCompletedCount

              !!!a better method of breaking the problem into components will need to be thought of, but you will figure these things out!!!

*/}



{/*

SubTask Logic

Todo: if false > true todo = todo

Doing: if true > false && false !== 0 = doing

Done: if true > false && false === 0 = done

*/}
