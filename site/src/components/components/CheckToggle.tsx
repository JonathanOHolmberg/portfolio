import { CheckToggleProps } from "@/config/types/ToggleProps";

import "@/styles/components/Components/toggle.css";

const CheckToggle: React.FC<CheckToggleProps> = ({ defaultValue, defaultIcon, toggleValue, toggleIcon, setValue, value }) => {

    const changeValue = () => {
        setValue(value === defaultValue ? toggleValue : defaultValue)
    }

    return (
        <div className="toggle">
          <label className="switch">
            <input checked={value === toggleValue} type="checkbox" onChange={() => changeValue()}/>
            <span className="slider"></span>
          </label>
          {value === defaultValue ? defaultIcon : toggleIcon}
        </div>
    );
}

export default CheckToggle;