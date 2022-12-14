function Header(){
    return(
        <div className="Header">
            <img src="https://www.pngall.com/wp-content/uploads/11/Apple-Logo-PNG-Background.png" alt="" className="logo" />
            <div className="soft">
                <p className="tel">+998 91 437 37 90</p>
                <span className="kon">Konsult</span>
            </div>
            <ul className="header-list">
                <li className="list-item">o nas</li>
                <li className="list-item">portfoliyu</li>
                <li className="list-item">razrabotka</li>
                <li className="list-item">dizayn</li>
                <li className="list-item">marketing</li>
                <li className="list-item">uslugi</li>
                <li className="list-item">konsalting</li>
            </ul>
            <div className="lang-serach">
                <p className="lang">uz</p>
                <p className="lang">eng</p>
                <p className="lang">ru</p>
                <p className="lang">pl</p>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Header;