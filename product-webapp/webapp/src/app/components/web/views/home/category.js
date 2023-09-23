import React, { PureComponent } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './Categorey.css'



export default class Category extends PureComponent {
  render() {
    return (
      <div className="osahan-body">
      <div className="p-3 osahan-categories">
          <h6 className="mb-2" style={{ marginTop: "120px" }}>What are you looking for ?</h6>
          <div className="row m-0">
            <div className="col pl-0 pr-1 py-1">
              <div className="bg-white shadow-sm rounded text-center px-2 py-3 c-it">
                <NavLink to="/listing">
                  <img
                    src="img/categorie/vege1.jpg" className="img-fluid px-2"
                    style={{ maxWidth: "100%", height: "130px" }} alt="Vegetables"
                  />
                  <p className="m-0 pt-2 text-muted text-center"style={{ fontWeight: "bold" }}>Fresh Vegetables</p>
                </NavLink>
              </div>
            </div>
            <div className="col p-1">
            <div className="bg-white rounded text-center px-1 py-3 c-it" style={{ boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)", padding: "5px" }}>
    <img
      src="img/categorie/fruit.jpg" className="img-fluid"
      style={{ maxWidth: "100%", height: "auto" }} alt="Fruits"
    />
    <p className="m-0 pt-2 text-muted text-center" style={{ fontWeight: "bold" }}>
      Fresh Fruits
    </p>
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
                    style={{ maxWidth: "100%", height: "110px" }}
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
                    style={{ maxWidth: "100%", height: "auto" }}
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
                  style={{ maxWidth: "100%", height: "70px" }}
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
