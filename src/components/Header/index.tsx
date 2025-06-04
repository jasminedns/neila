import "../../app/globals.css"
import DesktopNav from "@/components/DesktopNav";

const Header = () => {
    return (
        <header className="w-screen flex flex-row p-4 justify-center gap-10 bg-black/80">
            <DesktopNav />
        </header>
    )
}

export default Header;