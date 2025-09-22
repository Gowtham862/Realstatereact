import React from "react";
import { useState } from "react";
import "./Slider.scss";
// type SliderProps = {
//   images: string[];
// };
function Slider({ images }) {
  const [indeximage, setindeximage] = useState<any>(null);
  const chamgeside = (direction: any) => {
    if (direction == "left") {
      if (indeximage == 0) {
        setindeximage(images.length - 1);
      } else {
        setindeximage(indeximage - 1);
      }
    } else {
      if (indeximage == images.length - 1) {
        setindeximage(0)
      } else {
        setindeximage(indeximage+1)
      }
    }
  };
  return (
    <div className="Slider">
      {indeximage !== null && (
        <div className="fullslider">
          <div className="arrow" onClick={() => chamgeside("left")}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imagecontainer">
            <img src={images[indeximage]} alt="" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              onClick={() => chamgeside("right")}
              className="right"
              alt=""
            />
          </div>
          <div className="close" onClick={() => setindeximage(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigimage">
        <img src={images[0]} alt="" onClick={() => setindeximage(0)} />
      </div>
      <div className="smallimage">
        {images.map((image, index) => (
          <img
            src={image}
            alt=""
            key={index+1}
            onClick={() => setindeximage(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
