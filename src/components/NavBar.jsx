import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FadeInSection from "./FadeInSection";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "./navbar.css";

function NavBar(props) {
  const { pathname } = useLocation();
  const [altHeader, setAltHeader] = useState(true);
  const [showFullscreenMenu, setShowFullscreenMenu] = useState(false);
  const { width } = useWindowDimensions();

  const pages = ["", "about", "code", "art", "stage"];

  const listenScrollEvent = (event) =>
    window.scrollY > window.innerHeight - 100
      ? setAltHeader(false)
      : setAltHeader(true);

  useEffect(() => {
    if (pathname === "/") {
      setAltHeader(window.scrollY > window.innerHeight - 100 ? false : true);
    } else {
      setAltHeader(false);
    }
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [pathname]);

  const createLinks = () => {
    return pages.map((p) => (
      <Link
        to={`/${p}`}
        key={p}
        className={pathname.split("/")[1] === p ? "active" : undefined}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        {p === "" ? "home" : p}
      </Link>
    ));
  };

  const mobileMenu = () => {
    if (!altHeader || pathname !== "/") {
      return (
        <>
          <h4 style={{ zIndex: 3 }}>giao vu dinh</h4>
          <input
            id="burger"
            type="checkbox"
            className="checkboxInput"
            checked={showFullscreenMenu}
            onChange={() => setShowFullscreenMenu((prevState) => !prevState)}
          />
          <label htmlFor="burger">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </>
      );
    }
  };

  const createFullscreenLinks = () => {
    return pages.map((p, i) => (
      <div
        key={p}
        className={`navbar__fullscreen-link ${
          i === pages.length - 1 ? "remove-bottom-border" : ""
        }`}
      >
        <Link
          to={`/${p}`}
          className={pathname.split("/")[1] === p ? "active" : ""}
          onClick={() => {
            window.scroll(0, 0);
            setShowFullscreenMenu((prevState) => !prevState);
          }}
        >
          {p === "" ? "home" : p}
        </Link>
      </div>
    ));
  };

  const fullScreenMobileMenu = () => {
    return (
      <nav
        className={`navbar__fullscreen ${!showFullscreenMenu ? "hide" : ""}`}
      >
        {showFullscreenMenu && (
          <FadeInSection delay={400}>{createFullscreenLinks()}</FadeInSection>
        )}
      </nav>
    );
  };

  return (
    <>
      {width > 600 ? (
        <nav
          className={`navbar__background${
            pathname === "/" && altHeader ? "--alt" : ""
          }`}
        >
          <div className="navbar__centered">{createLinks()}</div>
        </nav>
      ) : (
        <>
          {fullScreenMobileMenu()}
          <nav
            className={`navbar-mobile navbar__background${
              pathname === "/" && altHeader ? "--alt" : ""
            }`}
          >
            {mobileMenu()}
          </nav>
        </>
      )}
    </>
  );
}

export default NavBar;
