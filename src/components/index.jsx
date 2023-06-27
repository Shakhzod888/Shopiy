import React, { Component } from "react";
import "./index.scss";
import Main from "./main/main";
import Services from "./services/services";
import Process from "./process/process";
import AboutStore from "./aboutStore/aboutStore";
import ForClients from "./forClients/forClients";
import Contact from "./contact/contact";

export default class Index extends Component {
  render() {
    return (
      <>
        <Main />
        <Services />
        <Process />
        <AboutStore />
        <ForClients />
        <Contact />
      </>
    );
  }
}
