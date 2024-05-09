import Slider from "react-slick";
import React, { Component } from "react";
import './HLCards.css'

export default class HLCards extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
      
      <Slider {...settings}>
      <div container spacing={2} xs={12} className="HLCards">
        <div item xs={12} sm={6} md={4} lg={3} xl={3}>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2022-11/winter_PC-masthead-WEB.png" alt="Cards" />
        </div>
        <div item xs={12} sm={6} md={4} lg={3} xl={3}>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2022-11/Winter_FB-masthead-WEB.png" alt="Cards" />
        </div>
        <div item xs={12} sm={6} md={4} lg={3} xl={3}>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2022-10/gifting-store-Banner-Web.jpg" alt="Cards" />
        </div>
        <div item xs={12} sm={6} md={4} lg={3} xl={3}>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2022-11/Winter_HH-masthead-WEB.png" alt="Cards" />
        </div>
      </div>
</Slider>
  );
 }
}

