import { useState, Fragment } from "react";
import { Switch } from "@headlessui/react";

export default function SlideToggle() {
  const [enabled, setEnabled] = useState(false);
  let transFormRemOneHalf = { transform: "translateX(1rem)" };

  return (
    <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
      {({ checked }) => (
        <button
          title="toggle_theme_switch"
          className="toggle_theme_switch_Container"
          style={{ backgroundColor: "#635FC7" }}
        >
          <span
            className={"toggle_theme_switch_button"}
            style={checked ? transFormRemOneHalf : {}}
          />
        </button>
      )}
    </Switch>
  );
}

/**
 * This item holds true no matter what
 * h-6 => height: 1.5rem;
 * w-11 => width: 2.75rem;
 * relative => position: relative;
 * inline flex => display: inline-flex;
 * items-center => align-items: center;
 * rounded-full => border-radius: 9999px;
 *
 * translate-x-6 => --transform-translate-x: 1.5rem;
 * translate-x-1 => --transform-translate-x: 0.25rem;
 * inline-block => display: inline-block;
 * h-4 => height: 1rem;
 * w-4 => width: 1rem;
 * rounded-full => border-radius: 9999px;
 *
 * display: inline-block;
 * background-color: #ffffff;
 * transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
 * width: 1rem;
 * height: 1rem;
 * border-radius: 9999px;
 */

/**
 *
 *
 * const something = () => ()
 *
 * returns content
 *
 * similar to => function something(){
 *  return()
 * }
 *
 *
 */
