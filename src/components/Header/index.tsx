import DesktopNav from "@/components/DesktopNav";
import "../../app/globals.css"
import HamburgerMenu from "../HamburgerMenu"
import HomePageLogo from "../HomePageLogo";

const Header = () => {

    return (
        <header className="flex flex-row p-4 justify-center gap-10">
            <DesktopNav />
        </header>
    )
}

export default Header;