import React, { Component } from "react";
import Client from "../assets/client.png";
import "../forClients/forClients.scss";

export default class ForClients extends Component {
  render() {
    return (
      <>
        <section className="forClients">
          <div className="creativeProcess">
            <p>CREATIVE PROCESS</p>
            <h5>
              Know your ads inside <br /> & out-perform
            </h5>
            <span>
              Lorem Ipsum is simply dummy text of the printing and <br />{" "}
              typesetting industry. Lorem Ipsum has been the industry's <br />{" "}
              standard dummy text ever since the 1500s, when an <br /> unknown
              printer took a galley of type and scrambled it to <br /> make a
              type specimen book. It has survived not only five centuries,
            </span>
          </div>
          <div className="clientImg">
            <img src={Client} alt="" />
          </div>
        </section>
      </>
    );
  }
}
