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
      <div className="textbox-leftaligned about__textbox">
        <h3>Education</h3>
        <h4>Princeton University</h4>
        <p>
          <i>2020 - 2024</i>
        </p>
        <br />
        <h5>Bachelor of Arts in Computer Science</h5>
        <p>GPA: 3.94</p>
        <p>Minor: Neuroscience</p>
        <br />

        <h5>Relevant coursework:</h5>
        <p>
          <span>Algorithms and Data Structures</span>,{" "}
          <span>Introduction to Programming Systems</span>,{" "}
          <span>Reasoning about Computation</span>,{" "}
          <span>Advanced Programming Techniques</span>,{" "}
          <span>Economics and Computing</span>,{" "}
          <span>Computational Models of Cognition</span>
        </p>
      </div>
      <div className="textbox-leftaligned about__textbox">
        <h3>Work Experience</h3>
        <h4>Red Hat</h4>
        <p>Hybrid - New York, NY</p>

        <br />
        <h5>Front End Developer Intern</h5>
        <p>
          <i>May - August 2022</i>, <i>June - August 2023</i>
        </p>
        <br />

        <ul>
          <li>
            <p>
              Contributed <b>50+ PRs</b> to the open source OCP Web Console,
              including 22 user stories
            </p>
          </li>
          <li>
            <p>
              Worked with{" "}
              <b>
                Typescript, Kubernetes, dynamic plugin APIs, i18next, Jest and
                Enzyme testing suites, and programmatic API documentation
                generation.
              </b>
            </p>
          </li>
          <li>
            <p>
              Worked extensively with the testing suite,{" "}
              <b>rewriting over 30 frontend test suites</b> with Jest and Enzyme
            </p>
          </li>
          <li>
            <p>
              Contributed to <b>reducing tech debt</b>, converting 10+ class
              components to functional components and
              <b> upgrading the React-Router package to v6</b>
            </p>
          </li>
          <li>
            <p>
              <b>Presented at company-wide Intern Expo</b> about internship work
              and the React Router migration strategy
            </p>
          </li>
          <li>
            <p>
              Collaborated extensively with the rest of the team and practiced
              pair programming with various members, alongside attending daily
              scrums, sprint planning and backlog estimation
            </p>
          </li>
        </ul>

        <div className="about__textbox-spacer"></div>

        <h4>Princeton Computer Science Department</h4>
        <p>Princeton, NJ</p>
        <br />
        <h5>Head Intro Lab TA</h5>
        <p>
          <i>January 2023 - Present</i>
        </p>
        <br />

        <ul>
          <li>
            <p>
              Led hiring of TA assistants for 3 introductory CS courses,{" "}
              <b>writing interview questions and conducting 20+ interviews;</b>{" "}
              increased applicant and new hire numbers by 300% and 40%
              respectively
            </p>
          </li>
          <li>
            <p>
              Redesigned <b>training procedures</b> and new hire orientation
            </p>
          </li>
          <li>
            <p>
              <b>Improved communications</b> by creating new Slack channels with
              course instructors and discussion board posts to{" "}
              <b>reach and receive feedback from students</b>
            </p>
          </li>
        </ul>

        <h5>2xx Lab TA</h5>
        <p>
          <i>January 2022 - December 2023</i>
        </p>
        <br />
        <ul>
          <li>
            <p>
              Assisted students with debugging weekly assignments and unit
              testing techniques
            </p>
          </li>
        </ul>

        <h5>COS226 Grader</h5>
        <p>
          <i>January 2021 - December 2021</i>
        </p>
        <br />
        <ul>
          <li>
            <p>
              Graded weekly assignments for COS226: Algorithms and Data
              Structures.
            </p>
          </li>
        </ul>
        <div className="about__textbox-spacer"></div>

        <h4>Connect Upskill</h4>
        <p>Princeton, NJ</p>
        <br />
        <h5>Lead Front End Developer</h5>
        <p>
          <i>July 2021 - July 2022</i>
        </p>
        <br />

        <ul>
          <li>
            <p>
              <b>Designed and developed front-end framework</b> for flagship
              platform using React and Flask integration.
            </p>
          </li>
          <li>
            <p>
              Implemented features include{" "}
              <b>
                authentication, onboarding flow, search, and scheduling system
              </b>
            </p>
          </li>
          <li>
            <p>
              Implemented <b>responsive and mobile-friendly site design</b>
            </p>
          </li>
          <li>
            <p>
              Weekly <b>maintenance, documentation, and debugging of code</b>{" "}
              with Git/Github version control
            </p>
          </li>
          <li>
            <p>
              Achieved{" "}
              <b>
                450+ unique users in 5 months since launch of platform with 60+
                sessions booked
              </b>
              , in partnership with the Princeton Careers Office
            </p>
          </li>
        </ul>
        <div className="about__textbox-spacer"></div>

        <h4>The Daily Princetonian</h4>
        <p>Princeton, NJ</p>
        <br />
        <h5>Software Engineer</h5>
        <p>
          <i>July 2021 - July 2022</i>
        </p>
        <br />

        <ul>
          <li>
            <p>
              <b>Led complete overhaul of code repository</b> for Sponsored Page
              project, converting old statically hosted site to a progressive
              web app with React front-end and Flask back-end
            </p>
          </li>
          <li>
            <p>
              Collaborated with tech and business teams to develop the CAMPUS
              app,{" "}
              <b>
                a progressive web app intended to become an online hub for
                university students
              </b>
            </p>
          </li>
          <li>
            <p>
              Achieved <b>5,000+ unique student users</b> for CAMPUS by six
              months after launch
            </p>
          </li>
          <li>
            <p>
              Released <b>2 major version updates</b> and maintained code weekly
              after site launch
            </p>
          </li>
        </ul>
      </div>
      <div className="textbox-leftaligned about__textbox">
        <h3>Leadership</h3>
        <h4 className="less-margin-bottom">Princeton University Wildcats</h4>
        <h5>Music Director</h5>
        <p>
          <i>January 2022 - Present</i>
        </p>
        <div className="mini-br" />
        <p>
          Led weekly acapella rehearsals, organized music repetoire for each
          school year, created music arrangements for the group, and ran
          auditions/callback processes.
        </p>
        <div className="about__textbox-spacer"></div>
        <div className="mini-br-2" />
        <h4 className="less-margin-bottom">Theatre Intime</h4>
        <h5>Special Projects Director</h5>
        <p>
          <i>July 2023 - Present</i>
        </p>
        <div className="mini-br" />
        <p>
          Organized festivals and special projects for the theater, including
          the annual Freshman One Act Festival.
        </p>
        <div className="mini-br-2" />
        <h5>Production Manager</h5>
        <p>
          <i>December 2021 - December 2022</i>
        </p>
        <div className="mini-br" />
        <p>
          Served as a technical and production resource for each mainstage
          show’s production manager and team members. Facilitated effective
          board involvement in all mainstage shows and festivals, specifically
          technical aspects such as tech hours and strike, and managed problems
          related to the technical and production elements of each show
        </p>
        <div className="mini-br-2" />
        <h5>Business Manager</h5>
        <p>
          <i>December 2020 - December 2021</i>
        </p>
        <div className="mini-br" />
        <p>
          Ensured a smooth cash flow of money, credit card charges and Passport
          to the Arts reimbursements via Centralized Ticketing System into all
          appropriate Intime accounts. Maintained the interest bearing capital
          account through the ODUS, and kept it balanced with the other accounts
          maintained for the theater’s finances.
        </p>
        <div className="mini-br-2" />
        <div className="about__textbox-spacer"></div>
        <h4 className="less-margin-bottom">Matriculate Advising</h4>
        <h5>Advising Fellow</h5>
        <p>
          <i>December 2020 - December 2021</i>
        </p>
        <div className="mini-br" />
        <p>
          Provided weekly college advising for low-income, first generation high
          school students.
        </p>

        <div className="mini-br-2" />
        <div className="about__textbox-spacer"></div>
        <h4 className="less-margin-bottom">Princeton Entrepreneurship Club</h4>
        <h5>IgniteSTEM</h5>
        <p>
          <i>January 2021 - December 2021</i>
        </p>
        <div className="mini-br" />
        <p>
          IgniteSTEM promotes hands-on project-based learning to activate
          students’ curiosity and creativity, organizing hackathons,
          makerspaces, and design thinking as ways for students to deeply engage
          with otherwise mundane material.
        </p>
      </div>
    </>
  );
}

export default About;
