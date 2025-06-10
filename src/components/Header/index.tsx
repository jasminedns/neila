import DesktopNav from "@/components/DesktopNav";
import "../../app/globals.css"
import HamburgerMenu from "../HamburgerMenu"

const Header = () => {

    return (
        <header className="flex flex-row p-4 justify-center gap-10 bg-black/80">
            <DesktopNav />
        </header>
    )
}

export default Header;