import React, { useEffect, useState } from "react";
import "./banner.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
// import Spinner from "react-bootstrap/Spinner";
import vid from "../media/vid.mp4";
import vid2 from "../media/vid2.mp4";
import vid3 from "../media/vid3.mp4";
// import imgPlaceHolder1 from "../media/placeHolder1.png";
// import imgPlaceHolder2 from "../media/placeHolder2.png";
// import imgPlaceHolder3 from "../media/placeHolder3.png";

const Banner = () => {
  // const [vidLoading, setVidLoading] = useState(true);

  // const setloading = () => {
  //   setVidLoading(false);
  // };
  return (
    <div className="main__Banner">
      <Carousel fade>
        <Carousel.Item>
          <video
            className="d-block w-100"
            alt="vid "
            autoPlay
            muted
            loop
            // onLoadedData={() => setloading()}
          >
            <source src={vid} type="video/mp4" />
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
