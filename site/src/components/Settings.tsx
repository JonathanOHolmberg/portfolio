import { useTheme } from "@/context/ThemeContext";

import CheckToggle from "./components/CheckToggle";
import IconRow from "./components/IconRow";

import { SunIcon } from "./icons/Sun";
import { MoonIcon } from "./icons/Moon";

import { colors } from "@/config/lists/colors";

const Settings: React.FC = () => {

    const { color, theme } = useTheme()
    
    return (
        <div className="settings">
            <IconRow
                value={color.value}
                setValue={color.setValue}
                items={colors} />
            <CheckToggle
                value={theme.value}
                setValue={theme.setValue}
                defaultValue="light"
                toggleValue="dark"
                defaultIcon={<SunIcon />}
                toggleIcon={<MoonIcon />} />
        </div>
    );
}
export default Settings;