import LogoDarkComponent from "./LogoDarkComponent";
import BoardComponent from "./BoardComponent";
import ShowHideComponent from "./ShowHideComponent";
import ThemeComponent from "./ThemeComponent";

export default function SideBarComponent() {
  return (
    <div className="side_Bar_Container">
      <LogoDarkComponent />
      {/* Can Be Split into Component */}
      <BoardComponent />
      {/* Can Be Split into Component */}
      <ThemeComponent />
      {/* Can Be Split into Component */}
      <ShowHideComponent />
    </div>
  );
}
