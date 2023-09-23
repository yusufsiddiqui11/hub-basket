import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Poster.css';

export const PosterContainer = (props) => {
  return (
    <>
      <div>
        <img src={props.posterimg} alt={props.posteralt} />
      </div>
    </>
  );
};

const Poster = () => {
  const posters = [
    { posterimg: 'img/categorie/banner3.jpg', posteralt: 'Poster 1' },
    { posterimg: 'img/categorie/banner2.jpg', posteralt: 'Poster 2' },
    { posterimg: 'img/categorie/banner1.jpg', posteralt: 'Poster 3' },
    { posterimg: 'img/categorie/banner4.jpg', posteralt: 'Poster 4' },
  ];

  return (
    <>
      <div className="postercont">
        <h6 className="mb-2">Our Others Features</h6>
        <Carousel
          showArrows={true}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          renderIndicator={(clickHandler, isSelected, index, label) => {
            return (
              <div
                key={index}
                className={`indicator ${isSelected ? 'selected' : ''}`}
                onClick={clickHandler}
              >
                <img
                  src={posters[index].posterimg}
                  alt={posters[index].posteralt}
                />
              </div>
            );
          }}
        >
          {posters.map((poster, index) => (
            <PosterContainer
              key={index}
              posterimg={poster.posterimg}
              posteralt={poster.posteralt}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Poster;
