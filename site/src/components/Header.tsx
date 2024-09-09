import { useTheme } from "@/context/ThemeContext";

import AttrToggle from "./components/AttrToggle";
import Nav from "./Nav";

import { SwatchIcon } from "./icons/Swatch";
import { SliderIcon } from "./icons/Slider";

const Header: React.FC = () => {
    
    const {nav, set } = useTheme()

    return (
        <header>
            <AttrToggle 
                value={nav.value}
                setValue={nav.setValue}
                defaultValue="true"
                toggleValue="false"
                icon={<SwatchIcon />} />
            <Nav />
            <AttrToggle 
                value={set.value}
                setValue={set.setValue}
                defaultValue="false"
                toggleValue="true"
                icon={<SliderIcon />} />
        </header>
    );
}
export default Header;