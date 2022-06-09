import React from "react";
import "./banner.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
// import Spinner from "react-bootstrap/Spinner";
import vid from "../media/vid.mp4";
import vid2 from "../media/vid2.mp4";
import vid3 from "../media/vid3.mp4";

const Banner = () => {
  return (
    <div className="main__Banner">
      <Carousel fade>
        <Carousel.Item>
          {vid ? (
            <video
              className="d-block w-100"
              alt="First slide"
              autoPlay
              muted
              loop
            >
              <source src={vid} type="video/mp4" />
            </video>
          ) : (
           <h1>loading...</h1>
          )}
        </Carousel.Item>
        <Carousel.Item>
          <video
            className="d-block w-100"
            alt="First slide"
            autoPlay
            muted
            loop
          >
            <source src={vid2} type="video/mp4" />
          </video>
        </Carousel.Item>

        <Carousel.Item>
          <video
            className="d-block w-100"
            alt="First slide"
            autoPlay
            muted
            loop
          >
            <source src={vid3} type="video/mp4" />
          </video>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
