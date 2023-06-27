import React, { Component } from "react";
import Logo from "../assets/logo.png";
import MainPerson from "../assets/mainPerson.png";
import Women from "../assets/women.png";
import Email from "../assets/Email.png";

import "../main/main.scss";

export default class Main extends Component {
  render() {
    return (
      <>
        <main>
          <header>
            <img src={Logo} alt="" />

            <div className="links">
              <ul>
                <li>About</li>
                <li>Product</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="forTryBtn">
              <button className="signBtn">Sign in</button>
              <button className="tryBtn">Try Free</button>
            </div>
          </header>

          <section className="mainPage">
            <div className="aboutWe">
              <p className="satisfieds">100% SATISFIED GUARANTEE</p>

              <h2>
                Power up your <br />
                shopify products
              </h2>

              <span className="aboutBusiness">
                More than 90,000+ companies trust our business. Get <br /> help
                from a dedicated shopify developer today.
              </span>

              <div className="signUpForm">
                <div className="email">
                  <img src={Email} alt="" />
                  <p>Your email address</p>
                </div>
                <button>Sign Up</button>
              </div>

              <div className="comforts">
                <div className="what">
                  <div className="ture">+</div>
                  <span className="duration yes">30 days free trial</span>
                </div>
                <div className="what">
                  <div className="ture">+</div>
                  <span className="creditCard yes">
                    No credit card required
                  </span>
                </div>
              </div>
            </div>

            <div className="mainPhoto">
              <img className="person" src={MainPerson} alt="" />
            </div>
          </section>
        </main>
      </>
    );
  }
}
