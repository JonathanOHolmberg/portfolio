import { useTheme } from "@/context/ThemeContext";
import CheckToggle from "./components/CheckToggle";

import { SunIcon } from "./icons/Sun";
import { MoonIcon } from "./icons/Moon";

const Settings: React.FC = () => {

    const { theme } = useTheme()
    
    return (
        <div className="settings">
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