import React from "react";
import { Link } from "react-router-dom";
import { items } from "./homepageItems";
import "./homepage.css";
import Gallery from "../../components/Gallery";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Home() {
  const { width } = useWindowDimensions();
  return (
    <div className="fade-in-wrapper">
      <banner className="homepage__banner">
        <div className="homepage__banner--text">
          <h5>hello world, i'm</h5>
          <h1>giao {width < 600 ? <br /> : ""} vu dinh</h1>
        </div>
      </banner>
      <main className="textbox vertical-align homepage__intro">
        <h2>create with the heart, build with the mind.</h2>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, lorem ipsum etc.
        </p> */}
        <p>
          Hi, I’m Giao. I’m a developer, creator, and performer passionate about
          using technology and art to bring ideas to life and make opportunites
          more accessible to all.
        </p>
        <p>
          Feel free to read more <Link to="/about">about me</Link>, or you can{" "}
          <a
            href="https://drive.google.com/file/d/1Yi60UFA_RJ9iWpLWwlrCtOL7MprCtL3Y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            check out my resume here
          </a>
          .
        </p>
      </main>
      <Gallery items={items} />
      <div className="spacer"></div>
    </div>
  );
}

export default Home;
