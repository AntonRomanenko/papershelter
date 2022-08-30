import React from "react";
import "../index.scss";
import { Carousel } from "react-bootstrap";
import flag from '../img/ua.png';
import singKatia from '../img/sign_katia.svg';
import singStas from '../img/sign_stas.svg';
import singEgor from '../img/sign_egor.svg';


function Slider() {
  return (
    <div id="carousel">
      <Carousel interval={5000}>
        <Carousel.Item className="slider-egor ">
          <div className="container slider-wrapper ">
            <img
              className="d-block  slider-wrapper__img"
              src={singEgor}
              alt="First slide"
            />
            <h3 className="slider-wrapper__title">
                “I woke up ant<br/>
                smyled like yesterday”
            </h3>
            <p className="slider-wrapper__text">
              Yehor Kravtsov<br/>
              8 years old, schoolkid<br/>
              Mariupol’
            </p>
            <img className="slider-wrapper__flag" src={flag} alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="slider-katia">
        <div className="container slider-wrapper ">
            <img
              className="d-block  slider-wrapper__img"
              src={singKatia}
              alt="First slide"
            />
            <h3 className="slider-wrapper__title">“I woke up ant<br/>
              — We’re all where?<br/>
              — In the basement.<br/>
              — In the sky flies what?<br/>
              — A fighter jet!
            </h3>
            <p className="slider-wrapper__text">
              Katia Savchenko<br/>
              27 years old, content manager<br/>
              Bucha<br/>
            </p>
            <img className="slider-wrapper__flag" src={flag} alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item className="slider-stas">
        <div className="container slider-wrapper ">
            <img
              className="d-block  slider-wrapper__img"
              src={singStas}
              alt="First slide"
            />
            <h3 className="slider-wrapper__title">“I woke up ant<br/>
                smyled like yesterday”
            </h3>
            <p className="slider-wrapper__text">
              Yehor Kravtsov<br/>
              8 years old, schoolkid<br/>
              Mariupol’
            </p>
            <img className="slider-wrapper__flag" src={flag} alt="" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider;



