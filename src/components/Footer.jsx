import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer__container">
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
    </div>
  );
}

export default Footer;
