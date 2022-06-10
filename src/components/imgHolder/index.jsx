import React, { useEffect, useState } from "react";
import axios from "axios";
import { Figure } from "react-bootstrap";
import "./imgHolder.css";
const ImgHolders = () => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getCast = async () => {
      const castData = await axios(
        "https://api.themoviedb.org/3/movie/374720/credits?api_key=d1d0f010ae5fe473397fda507081c5d8"
      );

      const allCast = castData.data.cast;
      const get20 = allCast.slice(0, 10);
      console.log(get20);
      setCast(get20);
    };
    getCast();
  }, []);

  return (
    <div className="Img__holder">
      <h1>Cast: </h1>
      <div className="cast__Container">
        {cast.map((castMember) => (
          <Figure key={castMember.order}>
            <Figure.Image
              width={200}
              height={180}
              alt="171x180"
              src={`https://www.themoviedb.org/t/p/original/${castMember.profile_path}`}
            />
            <Figure.Caption>
              <h6>
                {castMember.original_name}
                <span style={{ color: "gray" }}>
                  <br />
                  As {castMember.character}
                </span>
              </h6>
            </Figure.Caption>
          </Figure>
        ))}
      </div>
    </div>
  );
};

export default ImgHolders;
