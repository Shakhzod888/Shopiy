import React, { Component } from "react";
import Product from "../assets/product.png";
import "../aboutStore/aboutStore.scss";

export default class AboutStore extends Component {
  render() {
    return (
      <>
        <section className="aboutStore">
          <div className="productPage">
            <div className="product">
              <img src={Product} alt="" />
            </div>

            <div className="productService">
              <p className="textProduct">OUR PRODUCT STORIES</p>
              <h4>
                Why product stories? <br /> Learn more
              </h4>

              <div className="work">
                <div>+</div>
                <p>SEO optimized, high Google work</p>
              </div>

              <span className="lorem">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </span>
              <div className="work">
                <div>+</div>
                <p>Fast loading, low bounce rates</p>
              </div>

              <span className="lorem">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </span>
              <div className="work">
                <div>+</div>
                <p>SEO optimized, high Google work</p>
              </div>

              <span className="lorem">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </span>
            </div>
          </div>
        </section>
      </>
    );
  }
}
