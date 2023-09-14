import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "./navbar.css";

function NavBar(props) {
  const { pathname } = useLocation();
  const [altHeader, setAltHeader] = useState(true);
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
          <h4>giao vu dinh</h4>
          <img
            className="navbar__burger-menu"
            src={require("../images/burger.png")}
            alt="menu"
          />
        </>
      );
    }
  };

  return (
    <>
      {width > 600 ? (
        <div
          className={`navbar__background${
            pathname === "/" && altHeader ? "--alt" : ""
          }`}
        >
          <div className="navbar__centered">{createLinks()}</div>
        </div>
      ) : (
        <div
          className={`navbar-mobile navbar__background${
            pathname === "/" && altHeader ? "--alt" : ""
          }`}
        >
          {mobileMenu()}
        </div>
      )}
    </>
  );
}

export default NavBar;
