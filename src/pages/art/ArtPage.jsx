import React from "react";
import FadeInSection from "../../components/FadeInSection";
import Gallery from "../../components/Gallery";
import { items } from "./artItems";

function Art() {
  return (
    <>
      <FadeInSection>
        <div className="headerbox vertical-align">
          <h3>Art</h3>
          <p>some illustrations, animations, and designs I've created.</p>
        </div>
      </FadeInSection>
      <FadeInSection delay={300}>
        <Gallery items={items} />
      </FadeInSection>
      <div className="spacer"></div>
    </>
  );
}

export default Art;
