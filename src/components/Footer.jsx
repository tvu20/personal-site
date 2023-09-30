import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import "./footer.css";

function Footer() {
  const { width } = useWindowDimensions();
  return (
    <>
      {width > 600 ? (
        <footer className="footer__container">
          <>
            <h4>designed and created by Giao Vu Dinh</h4>
            <div className="footer__links">
              <a
                href="https://www.linkedin.com/in/giao-vu-dinh-5609ab208/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
              <a
                href="https://github.com/tvu20"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              <a
                href="mailto:tgdinh@princeton.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                email
              </a>
              <a
                href="https://drive.google.com/file/d/1Yi60UFA_RJ9iWpLWwlrCtOL7MprCtL3Y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                cv
              </a>
            </div>
          </>
        </footer>
      ) : (
        <footer className="footer-mobile__container">
          <h4>designed and created by Giao Vu Dinh</h4>
          <br />
          <p>contact</p>
          <p>
            <a
              href="mailto:tgdinh@princeton.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              tgdinh@princeton.edu
            </a>
          </p>

          <br />
          <p>elsewhere</p>
          <p>
            <a
              href="https://www.linkedin.com/in/giao-vu-dinh-5609ab208/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            ,{" "}
            <a
              href="https://github.com/tvu20"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            ,{" "}
            <a
              href="https://drive.google.com/file/d/1Yi60UFA_RJ9iWpLWwlrCtOL7MprCtL3Y/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </p>
        </footer>
      )}
    </>
  );
}

export default Footer;
