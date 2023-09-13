import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./gallery.css";

function Gallery(props) {
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

  const createItems = () => {
    return props.items.map((item) => {
      return (
        <div
          className="gallery__item"
          key={item.id}
          onMouseEnter={(e) => onHover(e, item.title)}
          onMouseLeave={(e) => onHoverOver(e)}
        >
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
            <img src={item.bannerImg} alt={item.title} />
          </Link>
        </div>
      );
    });
  };

  return <div className="gallery__container">{createItems()}</div>;
}

export default Gallery;
