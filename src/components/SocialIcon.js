import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/style/SocialIcon.css";

function SocialIcon() {
  return (
    <div className="top">
      <ul className="social-media">
        <li>
          <div className="icon">
            <i className="fab" alt="facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </i>
          </div>
        </li>
        <li>
          <div className="icon">
            <i className="fab" alt="google">
              <FontAwesomeIcon icon={faGoogle} />
            </i>
          </div>
        </li>
        <li>
          <div className="icon">
            <i className="fab" alt="linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </i>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcon;
