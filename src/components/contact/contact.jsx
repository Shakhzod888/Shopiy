import React, { Component } from "react";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Instagram from "../assets/Instagram.png";
import Linkedin from "../assets/Linkedin.png";

import Logo from "../assets/logo.png";

import "../contact/contact.scss";

export default class Contact extends Component {
  render() {
    return (
      <>
        <section className="contactPage">
          <h6>Contact with us.</h6>
          <p>More than 50,000+ companies trusted our business</p>
          <div className="forMessages">
            <span>Type your messages..</span>
            <button>Get Started</button>
          </div>
          <footer>
            <img src={Logo} alt="" />
            <ul className="linksFooter">
              <a href="#">About</a>
              <a href="#">Product</a>
              <a href="#">Service</a>
              <a href="#">Contact</a>
            </ul>
            <div className="contactLinks">
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={Instagram} alt="" />
              <img src={Linkedin} alt="" />
            </div>
          </footer>
        </section>
      </>
    );
  }
}
