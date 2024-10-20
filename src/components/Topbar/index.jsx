import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import icons from "../../constants/icons.js"
import "./index.css";

const Topbar = () => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();

    const handleOpeMenuMobile = () => {
        setOpenMenuMobile(true);
    };

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleCloseMenuMobile = () => {
        setOpenMenuMobile(false);
    };

    return (
        <>
            <div className="topbar">
                <div className="container-logo">
                    <div className="content-logo">
                        <div className="box-logo">
                            <img src={icons.logo} alt="" />
                        </div>
                        <span className="line"></span>
                    </div>
                </div>

                <div className="container-btn-hamburger">
                    <button onClick={handleOpeMenuMobile} className="btn-hamburger">
                        <img src={icons.iconMenuHamburguer} alt="" />
                    </button>
                </div>

                <nav className="navigation">
                    <ul className="nav-list">
                        <li className={`nav-link ${activeLink === "/" ? "link-active" : ""}`}>
                            <Link to="/"><span>00</span> Home</Link>
                        </li>
                        <li className={`nav-link ${activeLink === "/destination" ? "link-active" : ""}`}>
                            <Link to="/destination"><span>01</span> Destination</Link>
                        </li>
                        <li className={`nav-link ${activeLink === "/crew" ? "link-active" : ""}`}>
                            <Link to="/crew"><span>02</span> Crew</Link>
                        </li>
                        <li className={`nav-link ${activeLink === "/technology" ? "link-active" : ""}`}>
                            <Link to="/technology"><span>03</span> Technology</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <nav className={openMenuMobile ? "navigation-mobile" : "close-navigation-mobile"}>
                <div className="container-btn-close">
                    <div>
                        <button onClick={handleCloseMenuMobile} className="btn-close"><img src={icons.iconMenuClose} alt="" /></button>
                    </div>

                </div>
                <ul className="nav-list">
                    <div className="box-links">
                        <li className={`nav-link ${activeLink === "/" ? "link-mobile-active" : ""}`}>
                            <Link to="/" onClick={handleCloseMenuMobile}><span>00</span> Home</Link>
                        </li>
                        <li className={`nav-link ${activeLink === "/destination" ? "link-mobile-active" : ""}`}>
                            <Link to="/destination" onClick={handleCloseMenuMobile}><span>01</span> Destination</Link>
                        </li>
                        <li className={`nav-link ${activeLink === "/crew" ? "link-mobile-active" : ""}`}>
                            <Link to="/crew" onClick={handleCloseMenuMobile}><span>02</span> Crew</Link>
                        </li>
                        <li className={`nav-link ${activeLink === "/technology" ? "link-mobile-active" : ""}`}>
                            <Link to="/technology" onClick={handleCloseMenuMobile}><span>03</span> Technology</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Topbar;