import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <p className="name">Victoria Seaman</p>
      <div className="socials">
        <FontAwesomeIcon icon={faGithub} style={{ color: "#74C0FC" }} />
        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#63E6BE" }} />
        <FontAwesomeIcon icon={faEnvelope} style={{ color: "#63E6BE" }} />
      </div>
      <div className="linksList">
        <ol>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/archive">Archive</Link>
          </li>

          <li>
            <Link to="/funstuff">Fun Stuff</Link>
          </li>
        </ol>
      </div>
      <div className="photoCredit">
        Photo by{" "}
        <a href="https://unsplash.com/@brave4_heart?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Jigar Panchal
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/a-bunch-of-different-types-of-pipes-and-fittings-8BAyCFRCHqY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </div>
    </footer>
  );
};

export default Footer;
