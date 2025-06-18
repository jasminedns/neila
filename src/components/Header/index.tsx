import DesktopNav from "@/components/DesktopNav";
import "../../app/globals.css"
import HamburgerMenu from "../HamburgerMenu";


const Header = () => {

    return (
        <header className="flex flex-row p-4 justify-end md:justify-center gap-10 bg-black/80 relative z-99">
            <DesktopNav />
            <HamburgerMenu />           
        </header>
    )
}

export default Header;