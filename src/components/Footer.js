import ACMLogo from "../assets/images/ACM.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter as faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="footer p-10 bg-gray-800 text-white mx-auto text-base-content"
        id="footer"
      >
        <aside>
          <img src={ACMLogo} width={400} height={300} alt="ACM Logo" />
        </aside>
        <nav>
          <header className="footer-title">Quick Links</header>
          <NavLink to="/home" className="link link-hover">
            Home
          </NavLink>
          <NavLink to="/about" className="link link-hover">
            About
          </NavLink>
          <NavLink to="/events" className="link link-hover">
            Events
          </NavLink>
          <NavLink to="/team" className="link link-hover">
            Team
          </NavLink>
        </nav>
        <nav>
          <header className="footer-title">Follow Us</header>
          <a href="https://example.com" className="link link-hover">
            <FontAwesomeIcon
              icon={faFacebook}
              height={20}
              width={20}
              className="inline-block"
            />{" "}
            Facebook
          </a>
          <a href="https://example.com" className="link link-hover">
            <FontAwesomeIcon
              icon={faInstagram}
              height={20}
              width={20}
              className="inline-block"
            />{" "}
            Instagram
          </a>
          <a href="https://example.com" className="link link-hover">
            <FontAwesomeIcon
              icon={faXTwitter}
              height={20}
              width={20}
              className="inline-block"
            />{" "}
            Twitter
          </a>
          <a href="https://example.com" className="link link-hover">
            <FontAwesomeIcon
              icon={faLinkedin}
              height={20}
              width={20}
              className="inline-block"
            />{" "}
            LinkedIn
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
