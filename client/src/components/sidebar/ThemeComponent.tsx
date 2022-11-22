import iconlighttheme from "../../assets/icon-light-theme.svg";
import icondarktheme from "../../assets/icon-dark-theme.svg";
export default function ThemeComponent() {
  return (
    <div className="theme_Container">
      <img src={iconlighttheme} alt="" className="icon_Light_Theme_Img" />
      <div className="overlay"></div>
      <input className="slide_Toggle" id={`react-switch-new`} type="checkbox" />
      <label className="switch_Label" htmlFor={`react-switch-new`}>
        <span className={`switch_Button`} />
      </label>
      <img src={icondarktheme} alt="" className="icon_Dark_Theme_Img" />
    </div>
  );
}

/**
 * 
 * 
 * 
 * 
 * export default function ThemeComponent() {
  return (
    <div className="theme_Container">
      <img src={iconlighttheme} alt="" className="icon_Light_Theme_Img" />
      <div className="overlay"></div>
      <input className="slide_Toggle" id={`react-switch-new`} type="checkbox" />
      <label className="switch_Label" htmlFor={`react-switch-new`}>
        <span className={`switch_Button`} />
      </label>
      <img src={icondarktheme} alt="" className="icon_Dark_Theme_Img" />
    </div>
  );
}

 */
