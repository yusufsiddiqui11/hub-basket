import React, { PureComponent } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';



export default class Category extends PureComponent {
  render() {
    return (
      <div className="osahan-body">
      <div className="p-3 osahan-categories">
        <div style={{ width: "100%", height: "200px", background: "none" }}>
          <h6 className="mb-2">Great Weekend Sale!</h6>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
            <div>
              <img
                src="img/categorie/banner1.jpg"
                alt="Poster 1"
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: "10px" }}
              />
            </div>
            <div>
              <img
                src="img/categorie/banner2.jpg"
                alt="Poster 2"
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: "10px" }}
              />
            </div>
            <div>
              <img
                src="img/categorie/banner3.jpg"
                alt="Poster 3"
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", borderRadius: "10px" }}
              />
            </div>
          </Carousel>
        </div>

          <h6 className="mb-2" style={{ marginTop: "120px" }}>What are you looking for?</h6>
          <div className="row m-0">
            <div className="col pl-0 pr-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img
                    src="img/categorie/vege1.jpg"
                    className="img-fluid px-2"
                    style={{ maxWidth: "100%", height: "108px" }}
                    alt="Vegetables"
                  />
                  <p className="m-0 pt-2 text-muted text-center"style={{ fontWeight: "bold" }}>Fresh Vegetables</p>
                </a>
              </div>
            </div>
            <div className="col p-1">
            <div className="bg-white rounded text-center px-1 py-3 c-it" style={{ boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)", padding: "5px" }}>
  <Link to=".\fruitlist.jsx">
    <img
      src="img/categorie/fruit.jpg"
      className="img-fluid"
      style={{ maxWidth: "155px", height: "108px" }}
      alt="Fruits"
    />
    <p className="m-0 pt-2 text-muted text-center" style={{ fontWeight: "bold" }}>
      Fresh Fruits
    </p>
  </Link>
</div>

            </div>
          </div> 
          <div className="row m-0">
            <div className="col pl-0 pr-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img
                    src="img/categorie/grocery1.jpg"
                    className="img-fluid px-2"
                    style={{ maxWidth: "100%", height: "115px" }}
                    alt="Fast & Food"
                  />
                  <p className="m-0 pt-2 text-muted text-center"style={{ fontWeight: "bold" }}>
                    Grocery Products
                  </p>
                </a>
              </div>
            </div>
            <div className="col pr-0 pl-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <a href="/listing">
                  <img
                    src="img/categorie/dairy2.jpg"
                    className="img-fluid px-2"
                    style={{ maxWidth: "100%", height: "115px" }}
                    alt="Dairy"
                  />
                  <p className="m-0 pt-2 text-muted text-center"style={{ fontWeight: "bold" }}>Dairy & Baikary</p>
                </a>
              </div>
            </div>
          </div>
          <div className="row m-0">
          <div className="col-4 p-1">
            <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
              <a href="/listing">
                <img
                  src="img/categorie/egg.jpg"
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "auto" }}
                  alt="Fish 1"
                />
                <p className="m-0 pt-2 text-muted text-center" style={{ fontWeight: "bold" }}>
                  Eggs
                </p>
              </a>
            </div>
          </div>
          <div className="col-4 p-1">
            <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
              <a href="/listing">
                <img
                  src="img/categorie/chicken.jpg"
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "auto" }}
                  alt="Fish 2"
                />
                <p className="m-0 pt-2 text-muted text-center" style={{ fontWeight: "bold" }}>
                  Fresh Chicken
                </p>
              </a>
            </div>
          </div>
          <div className="col-4 p-1">
            <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
              <a href="/listing">
                <img
                  src="img/categorie/fish3.jpg"
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "68px" }}
                  alt="Fish 3"
                />
                <p className="m-0 pt-2 text-muted text-center" style={{ fontWeight: "bold" }}>
                  Fresh Fish
                </p>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
