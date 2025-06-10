import "../../app/globals.css"
import DesktopNav from "@/components/DesktopNav";

const Header = () => {
    return (
        <header className="flex flex-row p-4 justify-center gap-10">
            <DesktopNav />
        </header>
    )
}

export default Header;