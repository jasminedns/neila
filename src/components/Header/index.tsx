import "../../app/globals.css"

const Header = () => {
    return (
        <header className="w-screen flex flex-row p-4 justify-center gap-10 bg-black/80">
            <div className="header_div header_div:hover">About the Game</div>
            <div className="header_div header_div:hover">About the Team</div>
            <div className="header_div header_div:hover">Project info</div>
        </header>
    )
}

export default Header;