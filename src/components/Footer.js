import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <p>123 Acme St.</p>
              <h4>Houston, Texas</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              1-800-123-1234
            </h4>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#ffffff", marginRight: "2rem" }}
                />
                s4llm4n@gmail.com
              </h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About the Company</h4>
          <p>
            lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum
            dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
            ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
          </p>
          <div className="sosial">
            <FaFacebook
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer