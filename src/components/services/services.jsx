import React, { Component } from "react";
import ServicePhoto from "../assets/servicePhoto.png";
import "../services/services.scss";

export default class Services extends Component {
  render() {
    return (
      <>
        <section className="servicePage">
          <div>
            <img src={ServicePhoto} alt="" />
          </div>
          <div>
            <p className="satisfieds">SERVICES WE PROVIDES</p>
            <h2>
              Build on both: Google <br /> web stories and AMP <br /> website
              format
            </h2>

            <div className="numbersOfSale">
              <div className="dayWorking">
                <p>5660</p>
                <span>
                  Product sale per day working <br /> and sales
                </span>
              </div>
              <div className="forYourGood">
                <p>4M+</p>
                <span>
                  Downloaded saled in your <br /> good.
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
