import React, { Component } from "react";
import Category from "./category";
import Promos from "./promos";
import Offercard from "./offercard";
import Header from "../../../header";
import Footer from "../../../footer";
import Poster from "./Poster";
import NewCategory from "./NewCategory";
import Nav from "../../../header/Nav";
export default class Home extends Component {
  render() {
    return (
      <div className="home-wrap">
        <Nav />
        <Poster />
        <NewCategory />
        <Promos />
        <Offercard />
        <Footer />
      </div>
    );
  }
}
