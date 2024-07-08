import { Link } from "react-router-dom";

import About from "../pages/About.jsx";
import Archive from "../pages/Archive.jsx";
import FunStuff from "../pages/FunStuff.jsx";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <p className="name">Victoria Seaman</p>
      <div className="socials">socials</div>
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
