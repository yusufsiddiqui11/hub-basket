import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../web/views/home";
import ProductList from "./views/home/productList";
import Productdetail from "./views/home/productdetail";
import Cart from "./views/home/cart";
import Orderaddress from "./views/home/orderaddress";
import Payment from "./views/home/payment";
import Checkout from "./views/home/checkout";
import Successfully from "./views/home/successfully";
import Orderstatus from "./views/home/orderstatus";
import Shop from "./views/home/Shop";
import NewCategory from "./views/home/NewCategory";
import Register from "../../auth/register";
import Login from "../../auth/login";
import RegLog from "./RegLog";
import Cards from "./views/home/Nonveg";
import Nav from "../header/Nav";
import NewCart from "./views/home/NewCart";
import Features from "./views/home/Comp/Features";
import ImageBackgroundComponent from "./Reg/Firstpage";
export default class rootRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/listing" component={ProductList} />
          <Route exact path="/product-detail" component={Productdetail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/order-address" component={Orderaddress} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/successfully" component={Successfully} />
          <Route exact path="/order-status" component={Orderstatus} />
          <Route exact path="/Shop" component={Shop} />
          <Route exact path="/NewCategory" component={NewCategory} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/RegLog" component={RegLog} />
          <Route exact path="/Card" component={Cards} />
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/NewCart" component={NewCart} />
          <Route exact path="/Feature" component={Features} />
          <Route exact path="/Back" component={ImageBackgroundComponent} />

        </Switch>
      </div>
    );
  }
}