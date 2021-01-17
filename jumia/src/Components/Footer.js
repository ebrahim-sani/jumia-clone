import React from "react";
import "./Footer.css";
import EmailIcon from "@material-ui/icons/Email";
import { Button } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="first-component">
        <div className="footer-logo">
          <img src="/jumia.png" alt="jumia-logo" />
        </div>
        <div className="form">
          <h3>NEW TO JUMIA ?</h3>
          <p>
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
          <div className="subs-field">
            <div className="input__field">
              <EmailIcon className="email-icon" />
              <input type="text" placeholder="Enter E-mail Address" />
            </div>
            <button className="form-btn">Subscribe</button>
          </div>
        </div>
        <div className="right-comp">
          <div className="m-app">
            <div className="right__icon">
              <img src="/jumia-app-icon.png" alt="icon" />
            </div>
            <div className="desc">
              <h3>DOWNLOAD JUMIA FREE APP</h3>
              <p>Get access to exclusive offers!</p>
            </div>
          </div>
          <div className="linkss"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
