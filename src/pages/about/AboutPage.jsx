import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import FadeInSection from "../../components/FadeInSection";

import "./aboutpage.css";

function About() {
  const { width } = useWindowDimensions();
  return (
    <>
      <div className="spacer" style={{ height: "200px" }}></div>
      <div className="twocolumns about__container">
        {width < 750 && (
          <div className="about__column about__column--right align-right about__column-with-img">
            <FadeInSection delay={200}>
              <img src={require("../../images/pfp.jpg")} alt="singing" />
            </FadeInSection>
          </div>
        )}
        <div className="about__column about__column--left about__intro">
          <FadeInSection>
            <h2>Giao Vu Dinh</h2>
            <h4>Princeton, NJ</h4>
            <h4>
              <a
                href="mailto:tgdinh@princeton.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                tgdinh@princeton.edu
              </a>
            </h4>
            <p>
              I’m a senior at Princeton University, majoring in Computer Science
              with a minor in Neuroscience. I’m interested in front-end and
              full-stack web development, data visualization, and interactive
              storytelling through different mediums.
            </p>
          </FadeInSection>
          {/* <img src={require("../../images/music.jpg")} alt="singing" /> */}
        </div>

        {width >= 750 && (
          <div className="about__column about__column--right align-right about__column-with-img">
            <FadeInSection delay={100}>
              <img src={require("../../images/pfp.jpg")} alt="singing" />
            </FadeInSection>
          </div>
        )}
      </div>
    </>
  );
}

export default About;
