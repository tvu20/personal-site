import React from "react";
import FadeInSection from "../../components/FadeInSection";
import Gallery from "../../components/Gallery";
import { items } from "./codeItems";

function Code() {
  return (
    <>
      <FadeInSection>
        <div className="headerbox vertical-align">
          <h3>Code</h3>
          <p>a selection of projects that I've worked on. </p>
        </div>
      </FadeInSection>
      <FadeInSection delay={300}>
        <Gallery items={items} />
      </FadeInSection>
      <div className="spacer"></div>
    </>
  );
}

export default Code;
