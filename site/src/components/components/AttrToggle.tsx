import { AttrToggleProps } from "@/config/types/ToggleProps"

const AttrToggle: React.FC<AttrToggleProps> = ({ value, setValue, defaultValue, toggleValue, icon }) => {

    const changeValue = () => {
        return setValue(value === defaultValue ? toggleValue : defaultValue);
    }
    return (
        <a onClick={() => changeValue()}>
            {icon}
        </a>
    );
}

export default AttrToggle;