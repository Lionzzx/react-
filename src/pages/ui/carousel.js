import React from "react";
import { Carousel } from "antd";
import "./index.less";
export default class Carousels extends React.Component {
  render() {
    return (
      <div className="slider-wrap">
        <Carousel dots>
          <div>
            <img alt="example" src="/carousel-img/carousel-1.jpg" />
          </div>
          <div>
            <img alt="example" src="/carousel-img/carousel-2.jpg" />
          </div>
          <div>
            <img alt="example" src="/carousel-img/carousel-3.jpg" />
          </div>
        </Carousel>
      </div>
    );
  }
}
