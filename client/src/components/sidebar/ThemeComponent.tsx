import iconlighttheme from "../../assets/icon-light-theme.svg";
import icondarktheme from "../../assets/icon-dark-theme.svg";
import SlideToggle from "./slidetoggle";
export default function ThemeComponent() {
  return (
    <div className="theme_Container">
      <img src={iconlighttheme} alt="" className="icon_Light_Theme_Img" />
      <div className="overlay"></div>
      <SlideToggle />
      <img src={icondarktheme} alt="" className="icon_Dark_Theme_Img" />
    </div>
  );
}
