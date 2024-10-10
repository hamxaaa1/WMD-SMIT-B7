import React from "react";
import './carousel.css'

function Carousel() {
  const imgUrl1 = "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
  const imgUrl2 = "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
  const imgUrl3 = "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
  return (
    <>
      <div style={{marginBottom: 25}} id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{ height: '430px', objectFit: 'cover', width: '100%' ,objectPosition: 'top'  }} src={imgUrl1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="colorBlack">Shop Book</h5>
              <p className="colorBlack">
              Explore a vast collection of books across all genres.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img style={{ height: '430px', objectFit: 'cover', width: '100%' ,objectPosition: 'top'  }} src={imgUrl2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="colorBlack">Kitchen Essentials</h5>
              <p className="colorBlack">
              Discover must-have kitchen tools and gadgets for every chef.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img style={{ height: '430px', objectFit: 'cover', width: '100%' ,objectPosition: 'top'  }} src={imgUrl3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="colorBlack">Beauty Productsl</h5>
              <p className="colorBlack">
              Indulge in our selection of beauty essentials for every routine.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
