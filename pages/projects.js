//Import components
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "react-bootstrap/Image";

// Styling for image
const imgStyle = {
  width: 500,
  border: "1px #f0e68c solid",
  borderRadius: "9px",
  boxShadow: "2px 2px 8px #f0e68c",
};

// Projects page
export default () => (
  <Layout>
    <div className="breadcrumbs">
      <a href="/"> Home</a> {">"} <b>Projects</b>
    </div>
    <div className="projectsPage" id="projects">
      <div className="para">
        <h2>Projects</h2>
        <div className="text">
          These are some of my recent projects. I've deployed a few to their own
          web addresses with{" "}
          <a href="https://www.heroku.com/platform">Heroku</a> and others using{" "}
          <a href="https://github.com/SollyVista">Github</a>.
        </div>

        <div className="projectItem">
          <b>Itunes App</b>
          <br /> Created with HTML,CSS,Javascript ,React, Node and Express to fetch API and search 
          Media through itunes.com.
           <br />
          Website:{" "}
          <a href="https://heroku.com/apps/itunes-app-1">
            https://heroku.com/apps/itunes-app-1
          </a>{" "}
          <br />
          Github repo (source code):{" "}
          <a href="https://github.com/SollyVista/itunes-app">
            https://github.com/SollyVista/itunes-app
          </a>
          <div className="projNumber">1</div>
        </div>

        <div className="projectItem">
          <b>Minesweeper</b>
          <br /> Created with HTML, CSS, Javascript and React{" "}
          <br />
          Website:{" "}
          <a href="http://ancient-scrubland-7622.herokuapp.com/">
            https://ancient-scrubland-76228.herokuapp.com
          </a>{" "}
          <br />
          Github repo (source code):{" "}
          <a href="https://github.com/SollyVista/Capstone-project-I">
            https://github.com/SollyVista/Capstone-project-I
          </a>
          <div className="projNumber">2</div>
        </div>

        <div className="projectItem">
          <b>Online Resume</b> <br />
          Created with HTML, CSS and Javascript  <br />
          Website:{" "}
          <a href="https://secret-inlet-96684.herokuapp.com/">
            https://secret-inlet-96684.herokuapp.com
          </a>{" "}
          <br />
          Github repo (source code):{" "}
          <a href="https://github.com/SollyVista/Solomon_Baloyi_Resume">
            https://github.com/SollyVista/Solomon_Baloyi_Resume
          </a>
          <div className="projNumber">3</div>
        </div>

        <div className="projectItem">
          {" "}
          <b>Basic Online Store with Shopping Cart</b> <br />
          Created with HTML, CSS and Javascript <br />
          Website:{" "}
          <a href="https://evanmalherbe.github.io/capstoneProject2/">
            https://evanmalherbe.github.io/capstoneProject2
          </a>{" "}
          <br /> Github repo (source code){" "}
          <a href="https://github.com/SollyVista/Online-Store/">
            https://github.com/SollyVista/Online-Store/
          </a>
          <div className="projNumber">4</div>
        </div>

        <div className="text">
          Feel free to{" "}
          <Link href="/contact">
            <a>contact me</a>
          </Link>{" "}
          if you have any questions about my projects above.
        </div>
      </div>{" "}
      <div className="image">
        <Image
          src="/static/images/workpicLogo.png"
          alt="Man working on laptop"
          style={imgStyle}
        />
      </div>
    </div>

    {/* Styling for projects page */}
    <style jsx>{`
      .projectsPage {
        display: flex;
        flex-direction: row;
        padding: 1rem 4rem 1rem 4rem;
        width: 100%;
      }
      .para {
        padding: 0rem;
        width: 50%;
      }
      .projectItem {
        padding: 0.8rem;
        margin-bottom: 0.5rem;
        border: 1px solid #f0e68c;
        border-radius: 8px;
        font-size: 0.9rem;
      }
      .projectItem a {
        display: inline;
      }
      .projectItem b {
        font-size: 1.1rem;
      }
      .projNumber {
        text-align: right;
        padding: 0;
        margin: 0;
      }
      .text {
        padding: 0.5rem;
        margin-bottom: 0.5rem;
      }

      .image {
        margin-left: auto;
      }
      li {
        padding-bottom: 1rem;
      }
    `}</style>
  </Layout>
);

/* <div className="projectsPage">
      <div className="para">
        <h2>Projects</h2>
        <p>
          These are some of my recent projects. I've deployed a few to their own
          URL's with <a href="">Heroku</a> and others using{" "}
          <a href="https://github.com/evanmalherbe">Github</a>.
        </p>
        <p>
          <ul>
            <li>
              <b>Basic online store with shopping cart</b> <br />
              Created with HTML, CSS and Javascript <br />
              <a href="https://evanmalherbe.github.io/capstoneProject2/">
                https://evanmalherbe.github.io/capstoneProject2
              </a>{" "}
              (Github){" "}
            </li>

            <li>
              <b>Minesweeper game</b> <br />
              Created with HTML, CSS, Javascript and React <br />
              <a href="https://secret-inlet-96684.herokuapp.com/">
                https://secret-inlet-96684.herokuapp.com
              </a>{" "}
              (Heroku)
            </li>

            <li>
              <b>My iTunes app </b>
              <br /> Created with HTML, CSS, Javascript, React, Node and Express{" "}
              <br />
              <a href="https://ancient-scrubland-76228.herokuapp.com/">
                https://ancient-scrubland-76228.herokuapp.com
              </a>{" "}
              (Heroku)
            </li>

            <li>
              <b>Blog </b>
              <br /> Created with HTML, CSS, Javascript, React, Node, Express,
              MongoDB and JWT <br />
              <a href="https://hyperionblog.herokuapp.com/">
                https://hyperionblog.herokuapp.com
              </a>{" "}
              (Heroku)
            </li>
          </ul>
          Feel free to{" "}
          <Link href="/contact">
            <a>contact me</a>
          </Link>{" "}
          if you have any questions about my projects above.
        </p>
      </div>{" "}
      <div className="image">
        <Image
          src="/static/images/workPic.jpg"
          alt="Man working on laptop"
          style={imgStyle}
        />
      </div>
    </div>

    {/* Styling for projects page */
// <style jsx>{`
//   .projectsPage {
//     display: flex;
//     flex-direction: row;
//     padding: 1rem 4rem 1rem 4rem;
//   }
//   .para {
//     flex: 2;
//     padding: 1rem;
//     border: 1px solid red;
//   }
//   .image {
//     flex: 1;
//     margin-left: 1rem;
//   }
//   li {
//     padding-bottom: 1rem;
//   }
// `}</style> */}
