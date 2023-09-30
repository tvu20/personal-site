import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import FadeInSection from "../../components/FadeInSection";

import "./stagepage.css";

function Stage() {
  const { width } = useWindowDimensions();
  return (
    <>
      <FadeInSection>
        <div className="headerbox vertical-align">
          <h3>Stage</h3>
          <p>my history in the performing arts. </p>
        </div>
      </FadeInSection>

      <div className="twocolumns stage__container">
        <div className="stage__column stage__column--left stage__column-with-img">
          <FadeInSection delay={100}>
            <img src={require("../../images/music.jpg")} alt="singing" />
          </FadeInSection>
        </div>

        <div className="stage__column stage__column--right">
          <FadeInSection delay={100}>
            <h3>music</h3>

            <p>
              <b>Music Director</b> for the <i>Princeton University Wildcats</i>
              , 2021 - present
            </p>

            <p>
              <b>Weekly Performer</b> for the <i>Princeton Coffee Club</i>, 2023
              - present
            </p>

            <p className="stage__begin-list">
              <b>Music Director</b> for various musical productions:
            </p>
            <ul>
              <li>
                <p>
                  <b>Pippin</b>{" "}
                  <i>(Theatre Intime/Princeton University Players, 2024)</i>
                </p>
              </li>
              <li>
                <p>
                  <b>Shrek: The Musical</b>{" "}
                  <i>(Theatre Intime/Princeton University Players, 2022)</i>
                </p>
              </li>
              <li>
                <p>
                  <b>The Art of Pleasing Princes</b>{" "}
                  <i>(Princeton University Players, 2022)</i>
                </p>
              </li>
              <li>
                <p>
                  <b>The Mushening</b>{" "}
                  <i>(Princeton University Players, 2022)</i>
                </p>
              </li>
            </ul>

            <p>
              <b>Singer</b> (Alto I/II) for the{" "}
              <i>Princeton University Chamber Choir</i>, 2021 - present
            </p>

            <p>
              <b>Finalist</b> on <i>Vietnam's Got Talent</i>, 2012
            </p>
          </FadeInSection>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="twocolumns stage__container">
        {width < 750 && (
          <div className="stage__column stage__column--right align-right stage__column-with-img">
            <img src={require("../../images/theater.jpg")} alt="singing" />
          </div>
        )}
        <div className="stage__column stage__column--left">
          <h3>theater</h3>
          <h4 style={{ fontWeight: 500, fontSize: "20px" }}>Acting Credits</h4>
          <ul>
            <li>
              <p>
                <b>Something Rotten</b> <i>(Princeton, 2024)</i> - Bea Bottom
              </p>
            </li>
            <li>
              <p>
                <b>Cabaret</b> <i>(Princeton, 2023)</i> - Fraulein Schneider
              </p>
            </li>
            <li>
              <p>
                <b>Little Women </b>
                <i>(Princeton, 2023)</i> - Marmee
              </p>
            </li>
            <li>
              <p>
                <b>Twelfth Night</b> <i>(Princeton, 2022)</i> - Malvolio
              </p>
            </li>
            <li>
              <p>
                <b>Tea</b> <i>(Princeton, 2021)</i> - Atsuko
              </p>
            </li>
            <li>
              <p>
                <b>Lizzie: The Musical</b> <i>(Princeton, 2021)</i> - Bridget
                Sullivan
              </p>
            </li>
            <li>
              <p>
                <b>As You Like It</b> <i>(Princeton, 2020)</i> - Jaques
              </p>
            </li>
            <li>
              <p>
                <b>Sweeney Todd </b> <i>(Lawrenceville, 2019)</i> - Tobias Ragg
              </p>
            </li>
          </ul>
          <h4 style={{ fontWeight: 500, fontSize: "20px" }}>
            Production Roles
          </h4>
          <ul>
            <li>
              <p>
                <b>Flight of a Legless Bird</b> <i>(Princeton, 2024)</i> - Stage
                Manager
              </p>
            </li>
            <li>
              <p>
                <b>The Laramie Project</b> <i>(Princeton, 2022)</i> - Stage
                Manager
              </p>
            </li>
            <li>
              <p>
                <b>Choices</b> <i>(Princeton, 2021)</i> - Director
              </p>
            </li>
          </ul>
        </div>

        {width >= 750 && (
          <div className="stage__column stage__column--right align-right stage__column-with-img">
            <img src={require("../../images/theater.jpg")} alt="singing" />
          </div>
        )}
      </div>
    </>
  );
}

export default Stage;
