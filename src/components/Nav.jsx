import '../styles/Nav.css'
export default function Nav() {

    return (
        <nav className="navbar">
            <div className="container">

                <div className="navbar-header">
                    <button className="navbar-toggler" data-toggle="open-navbar1">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <a href="#">
                        <h4>Aegis<span>2022</span></h4>
                    </a>
                </div>

                <div className="navbar-menu" id="open-navbar1">
                    <ul className="navbar-nav">

                        <li><a href="#about">About</a></li>
                        <li className="dropdown">
                            <label className="dropdown">

                                <div className="dd-button">
                                    Events
                                </div>

                                <input type="checkbox" className="dd-input" id="test" />

                                <ul className="dd-menu">
                                    <li><a href="#redline">Red Line</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#srishti">Srishti: The Contraption</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#srm">Sample Return Mission</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#imago">Imago</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#ventura">Ventura</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#techtalk">Tech Talk</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#pd">Panel Discussion</a></li>
                                </ul>

                            </label>
                        </li>
                        <li><a href="#footer">Contact</a></li>
                    </ul>
                </div >
            </div >
        </nav >
    )
}