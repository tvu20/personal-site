import React from "react";
import Gallery from "../../components/Gallery";
import { items } from "./codeItems";

function Code() {
  return (
    <>
      <div className="headerbox vertical-align">
        <h3>Code</h3>
        <p>a selection of projects that I've worked on. </p>
      </div>
      <Gallery items={items} />
      <div className="spacer"></div>
    </>
  );
}

export default Code;
