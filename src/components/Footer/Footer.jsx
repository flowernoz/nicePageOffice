import './Footer.css'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {


    return (
      <div className="Footer">
        <div className="footer-top">
          <h2>Office Design Gallery</h2>
          <div className="footer-links">
            <a href={"#"}>
              <FaFacebookF />
            </a>
            <a href={"#"}>
              <FaTwitter />
            </a>
            <a href={"#"}>
              <FaInstagram />
            </a>
            <a href={"#"}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <span>
          Office Design Gallery brings you our hand picked selection of the best
          office <br /> design pictures.footer text
        </span>
      </div>
    );
}

export default Footer
