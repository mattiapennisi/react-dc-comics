export default function Footer({ dcComicsLinks, shopLinks, dcLinks, sitesLinks }) {
    return (
        <footer id="Footer">

            <section id="footer-nav">
                <div id="footer-nav-links">
                    <div className="footer-nav-links-element">
                        <h3>
                            DC COMICS
                        </h3>
                        <ul>
                            {dcComicsLinks.map((link, index) => {
                                return <li key={index}>{link}</li>
                            })}
                        </ul>
                        <h3>
                            SHOP
                        </h3>
                        <ul>
                        {shopLinks.map((link, index) => {
                                return <li key={index}>{link}</li>
                            })}
                        </ul>
                    </div>
                    <div className="footer-nav-links-element">
                        <h3>
                            DC
                        </h3>
                        <ul>
                        {dcLinks.map((link, index) => {
                                return <li key={index}>{link}</li>
                            })}
                        </ul>
                    </div>
                    <div className="footer-nav-links-element">
                        <h3>
                            SITES
                        </h3>
                        <ul>
                        {sitesLinks.map((link, index) => {
                                return <li key={index}>{link}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <div id="footer-nav-logo">
                    <img src="/img/dc-logo-bg.png" alt="DC logo in background" />
                </div>
            </section>

            <section id="footer-log">
                <div id="log-button">SIGN-UP NOW!</div>
                <div id="social-links">
                    <div className="social-links-element">
                        FOLLOW-US
                        </div>
                    <div className="social-links-element">
                        <img src="/img/footer-facebook.png" alt="Facebook logo" />
                    </div>
                    <div className="social-links-element">
                        <img src="/img/footer-twitter.png" alt="Twitter logo" />
                    </div>
                    <div className="social-links-element">
                        <img src="/img/footer-youtube.png" alt="Youtube logo" />
                    </div>
                    <div className="social-links-element">
                        <img src="/img/footer-pinterest.png" alt="Pinterest logo" />
                    </div>
                    <div className="social-links-element">
                        <img src="/img/footer-periscope.png" alt="Periscope logo" />
                    </div>
                </div>
            </section>

        </footer>
    )
}