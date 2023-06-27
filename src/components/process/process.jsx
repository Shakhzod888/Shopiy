import React, { Component } from "react";
import Process_1 from "../assets/process_1.png";
import Process_2 from "../assets/process_2.png";
import Process_3 from "../assets/process_3.png";
import Process_4 from "../assets/process_4.png";

import "../process/process.scss";
export default class Process extends Component {
  render() {
    return (
      <>
        <section className="processPage">
          <div className="ourAbility">
            <p className="whatWeDo">WHAT WE DO</p>
            <h3>
              Our creative process <br /> for your business
            </h3>
            <span className="asOutMotto">
              As our motto, we always provide the best service <br /> especially
              for you and your <br /> company by growing your company to be
              better.
            </span>
          </div>

          <div class="process">
            <div class="processes">
              <img className="process_1" src={Process_1} alt="" />
              <p className="growYourTraffic">Grow your traffic</p>
              <p className="text">
                We always help your company <br /> to grow with us.
              </p>
            </div>
            <div class="processes active">
              <img className="process_2" src={Process_2} alt="" />
              <p className="growYourTraffic">Content for sales</p>
              <p className="text">
                Every company that we handel. <br /> We always content more
                sales.
              </p>
            </div>
            <div class="processes">
              <img className="process_3" src={Process_3} alt="" />
              <p className="growYourTraffic">Reporting & analytics</p>
              <p className="text">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing.
              </p>
            </div>
            <div class="processes">
              <img className="process_4" src={Process_4} alt="" />
              <p className="growYourTraffic">Better Conversion</p>
              <p className="text">
                We always help your company <br /> to grow with us.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
