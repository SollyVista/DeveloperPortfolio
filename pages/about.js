//Import layout component
import Layout from "../components/Layout";

// Import bootstrap image component
import Image from "react-bootstrap/Image";

// Styling for image
const imgStyle = {
  width: 220,
  margin: "0rem 1rem 0rem 1rem",
  border: "1px #f0e68c solid",
  borderRadius: "9px",
  boxShadow: "2px 2px 8px #f0e68c",
};

// About page
export default () => (
  <Layout>
    <div className="breadcrumbs">
      <a href="/">Home</a> {">"} <b>About</b>
    </div>
    <div className="aboutPage">
      <div className="paraAndImage">
        <div className="para">
          <h2>About</h2>
          <p>
            My name is Solomon Baloyi and I'm a friendly, easy going person who
            loves to meet new people. I enjoy challenges and find the world
            completely fascinating. I'm passionate about music, gardening and
            web development. At various times in the last decade, I've worked in
            sales, financial advisory, client services and I'm currently enjoy
            working in Compliance. It is really a milestone for me in terms of growth
            and diversifying my portfolio, however the journey is fun and    
            rewarding. I'm motivated by the prospect of a fulfilling career in
            Full Stack Web Development and I'm loving the process of learning to
            build useful websites.
          </p>
        </div>
        <div className="image">
          <Image
            src="/static/images/Solomon.jpg"
            alt="Evan seated"
            style={imgStyle}
          />
        </div>
      </div>
      <div className="eduAndWork">
        <div className="edu">
          <h3>Education</h3>
          <p>
            My prior education is listed below:
            <br />
            <div className="priorEduDivs">
              <b>HyperionDev</b> <br />
              Full Stack Web Developer Bootcamp <br />
              2022 <br />
            </div>
            <div className="priorEduDivs">
              <b>Moonstone Business School of Excellence</b> <br />
              RE:5 for Representatives <br />
              2011
            </div>
            <div className="priorEduDivs">
              <b>Setumo-Khiba High School</b> <br />
              Matric Exemption <br />
              2006
            </div>
          </p>
        </div>
        <div className="work">
          <h3>Work Experience</h3>
          <div className="job">
            {" "}
            <b>Compliance Support Consultant </b> <br />
            Mukuru Financial Service (Jun 2022 to Current) <hr />
            <p>
              Process email alerts for watchlists hits effectively. <b/> Receive realtime,automated
              as well as escalated alerts for watchlists hits.
            </p>
          </div>
          <div className="job">
            <b>Customer Support Consultant</b> <br />
            Mukuru Africa (Oct 2020 to May 2022) <hr />
            <p>
              Assist customers who call the Mukuru support department. <b/> Manage own system by prioritizing 
              calls and creating tickets on Zendesk for queries that must be escalated further.
            </p>
          </div>
          <div className="job">
            <b>Branch Consultant</b> <br />
            Hollard Insurance (Mar 2019 to Mar 2020) <hr />
            <p>
              {" "}
              Assist new and existing clients with enrollments and amendments on life products. <b/> Escalating
              death and general claims to HQ for further assessments and payouts.
            </p>
          </div>
          <div className="job">
            <b>Financial Advisor</b> <br />
            Metropolitan  (Apr 2018 to Feb 2019) <hr />
            <p>
              {" "}
              Prospecting and sourcing new clients through group presentations. <b/> Performing needs analysis
              to establish customer's financial needs and enroll them .
            </p>
          </div>
          <div className="job">
            <b>Senior Sales Executive</b> <br />
            Telesure Investment Holdings  (Mar 2017 to Feb 2018) <hr />
            <p>
              {" "}
              Assessing new clients calls in for short term insurance in line with QA standards. <b/> Enrolling
              new sales on the company sales system .
            </p>
          </div>
          <div className="job">
            <b>Senior Sales Consultant</b> <br />
            Mutual and Federal  (Jun 2015 to May 2016) <hr />
            <p>
              {" "}
              Process applications through inbound and outbound calls and provide end to end service. <b/> 
              Upselling value added services and referrals for life products to branches.
            </p>
          </div>
          <div className="job">
            <b>Sales and Service Consultant</b> <br />
            First National Bank S.A (Jun 2007 to Mar 2015) <hr />
            <p>
              {" "}
              Assisting new and existing clients realize their financial goals. <b/> Adhering to the branch banking principles.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Styling for about page */}
    <style jsx>{`
      .job p {
        line-height: 1.3rem;
        font-size: 0.9rem;
        padding-top: 0.5rem;
      }
      hr {
        padding: 0;
        margin: 0;
      }
      .aboutPage {
        display: flex;
        flex-direction: column;
        padding: 1rem 4rem 1rem 4rem;
      }
      .paraAndImage {
        display: flex;
        flex-direction: row;
        width: 100%;
      }
      .para {
        width: 78%;
      }
      .image {
        margin-left: auto;
      }
      .edu {
        flex: 1;
      }
      .work {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .job {
        border: 1px solid #f0e68c;
        border-radius: 8px;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        background-color: #f0e68c;
      }
      .eduAndWork {
        display: flex;
        flex-direction: row;
      }
      .priorEduDivs {
        border: 1px solid #f0e68c;
        background-color: #f0e68c;
        margin: 0.5rem 1rem 0.5rem 0rem;
        padding: 0.5rem;
        border-radius: 8px;
      }
    `}</style>
  </Layout>
);

//#dedede
