import BoardEmpty from "../board/BoardEmpty";
export default function TaskContainer() {
  console.log(BoardEmpty());
  return (
    <div className="task_Container">
      <BoardEmpty />
    </div>
  );
}
