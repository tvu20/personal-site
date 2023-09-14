import React, { useState } from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "./gallery.css";

function Gallery(props) {
  const { width } = useWindowDimensions();
  const [hover, setHover] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const onHover = (e, text) => {
    setHover(true);
    setHoverText(text);
  };

  const onHoverOver = (e) => {
    setHover(false);
    setHoverText("");
  };

  const createHover = (item) => {
    return (
      <Link
        to={item.to}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        {hover && hoverText === item.title && (
          <div className="gallery__hover-text">
            <h3>{item.title}</h3>
          </div>
        )}
        <img
          className="gallery__desktop-img"
          src={item.bannerImg}
          alt={item.title}
        />
      </Link>
    );
  };

  const createMobileSquare = (item) => {
    return (
      <>
        <Link
          to={item.to}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          <img
            className="gallery__mobile-img"
            src={item.bannerImg}
            alt={item.title}
          />
        </Link>
        {item.tagline && (
          <h4
            className="gallery__mobile-title"
            style={{ textDecoration: "none" }}
          >
            {item.tagline}
          </h4>
        )}
        {item.short && (
          <p
            className="gallery__mobile-description"
            dangerouslySetInnerHTML={{ __html: item.short }}
          />
        )}
      </>
    );
  };

  const createItems = () => {
    return props.items.map((item) => {
      return (
        <div key={item.title}>
          <div
            className="gallery__item"
            key={item.id}
            onMouseEnter={(e) => onHover(e, item.title)}
            onMouseLeave={(e) => onHoverOver(e)}
          >
            {width < 600 ? createMobileSquare(item) : createHover(item)}
            {/* {createHover(item)} */}
          </div>
          {/* {width < 600 && (
            <>
              <h4 className="gallery__mobile-title">{item.title}</h4>
              <p className="gallery__mobile-description">{item.short}</p>
            </>
          )} */}
        </div>
      );
    });
  };

  return <div className="gallery__container">{createItems()}</div>;
}

export default Gallery;
