const HeaderLinks = [
  'CHARACTERS',
  'COMICS',
  'MOVIES',
  'TV',
  'GAMES',
  'COLLECTIBLES',
  'VIDEOS',
  'FANS',
  'NEWS',
  'SHOP'
]

export default function Header() {
    return (
        <header id="Header" className="d-flex justify-content-between align-items-center">
            <div id="header-logo">
                <img src="img/dc-logo.png" alt="DC logo" />
            </div>
            <nav id="header-nav">
                <ul className="row gap-1 justify-content-center">
                    {HeaderLinks.map((link, index) => (
                        <li key={index}>{link}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}