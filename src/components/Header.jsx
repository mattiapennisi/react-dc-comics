export default function Header() {
    return (
        <header id="Header" className="d-flex justify-content-between align-items-center">
            <div id="header-logo">
                <img src="img/dc-logo.png" alt="DC logo" />
            </div>
            <div id="header-nav">
                <ul className="row gap-1 align-items-end justify-content-center">
                    <li>CHARACTERS</li>           
                    <li>COMICS</li>
                    <li>MOVIES</li>
                    <li>TV</li>
                    <li>GAMES</li>
                    <li>COLLECTIBLES</li>
                    <li>VIDEOS</li>
                    <li>FANS</li>
                    <li>NEWS</li>
                    <li>SHOP</li>
                </ul>
            </div>
        </header>
    )
}