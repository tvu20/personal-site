import React, { useState, useRef, useLayoutEffect } from "react";
import "../styles/fadein.css";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let timer;
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:

        // delay
        if (props.delay) {
          timer = setTimeout(() => {
            setVisible(true);
          }, props.delay);
        } else {
          setVisible(true);
        }

        // No need to keep observing:
        observer.unobserve(domRef.current);

        return () => clearTimeout(timer);
      }
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, [props.delay]);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  );
}
