import React from "react";
import "./Footer.css";
import EmailIcon from "@material-ui/icons/Email";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import { FaCcMastercard } from "react-icons/fa";
import { FaDhl } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__component">
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
        <div className="second-component">
          <div className="footer__links">
            <div className="footer__content">
              <h3>LET US HELP YOU</h3>
              <p>Help Center</p>
              <p>How to shop on Jumia?</p>
              <p>Delivery options and timelines</p>
              <p>How to return a production on Jumia?</p>
              <p>Corporate and bulk purchases</p>
              <p>Report a Product</p>
            </div>
            <div className="footer__content">
              <h3>ABOUT JUMIA</h3>
              <p>About us</p>
              <p>Jumia careers</p>
              <p>Jumia Express</p>
              <p>Terms and Conditions</p>
              <p>Privacy policy</p>
              <p>Jumia Prime</p>
              <p>Stay Safe</p>
              <p>Black Friday</p>
            </div>
            <div className="footer__content">
              <h3>MAKE MONEY WITH JUMIA</h3>
              <p>Sell on Jumia</p>
              <p>Become a Sales Consultant</p>
              <p>Become a Jumia Vendor Service Provider</p>
              <p>Become a Logistics Service Partner</p>
            </div>
            <div className="footer__content">
              <h3>JUMIA INTERNATIONAL</h3>
              <div className="countries">
                <div className="row__list">
                  <p>Algeria</p>
                  <p>Kenya</p>
                  <p>Ghana</p>
                  <p>Egypt</p>
                  <p>Ivory Coast</p>
                  <p>Morocco</p>
                </div>
                <div className="row__list">
                  <p>Senegal</p>
                  <p>Tunisia</p>
                  <p>Uganda</p>
                  <p>South Africa</p>
                  <p>Zando</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="third-component">
          <div className="social-links">
            <h3>JOIN US ON</h3>
            <div className="iconns">
              <TwitterIcon className="social__icon" />
              <FacebookIcon className="social__icon" />
              <ShoppingCartIcon className="social__icon" />
              <YouTubeIcon className="social__icon" />
              <InstagramIcon className="social__icon" />
            </div>
          </div>
          <h3>Jumia FAKE website</h3>
          <div className="payment__method">
            <h3>PAYMENT METHODS & DILIVERY PARTNERS</h3>
            <FaCcMastercard className="payment__icon" />
            <RiVisaLine className="payment__icon" />
            <FaDhl className="payment__icon" />
            <FaPaypal className="payment__icon" />
            <FaApplePay className="payment__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
