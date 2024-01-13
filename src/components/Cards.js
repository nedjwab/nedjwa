import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import pic1 from './E-ticket.png';
import pic2 from './film.png';
import pic3 from './l.png';
import pic4 from './math.PNG';
import pic5 from './portfolio.PNG';
import pic6 from  './budget.PNG';

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    config: config.gentle
  };

  slides = [
    {
      key: 1,
      content: <img src={pic1} className="rounded-lg" alt="1" />
    },
    {
      key: 2,
      content: <img src={pic2} className="rounded-lg" alt="2" />
    },
    {
      key: 3,
      content: <img src={pic3} className="rounded-lg" alt="3" />
    },
    {
      key: 4,
      content: <img src={pic4} className="rounded-lg" alt="4" />
    },
    {
      key: 5,
      content: <img src={pic5} className="rounded-lg" alt="5" />
    },
    {
      key: 6,
      content: <img src={pic6} className="rounded-lg" alt="6" />
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "65%", height: "500px", margin: "0 0 0 25%" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
