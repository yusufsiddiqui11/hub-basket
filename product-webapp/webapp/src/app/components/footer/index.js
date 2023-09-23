import React from "react";
import { useHistory } from 'react-router-dom';

export default function Footer() {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <div className="osahan-menu-fotter fixed-bottom bg-white text-center border-top">
      <div className="row m-0">
        <a
          onClick={() => handleClick("/")}
          href="/"
          className="text-dark small col font-weight-bold text-decoration-none p-2 selected"
        >
          <p className="h5 m-0">
            <i className="text-success icofont-grocery" />
          </p>
          Shop
        </a>
        <a
          onClick={() => handleClick("/cart")}
          href="/cart"
          className="text-muted col small text-decoration-none p-2"
        >
          <p className="h5 m-0">
            <i className="icofont-cart" />
          </p>
          Cart
        </a>
        <a
          onClick={() => handleClick("/order-status")}
          href="/order-status"
          className="text-muted col small text-decoration-none p-2"
        >
          <p className="h5 m-0">
            <i className="icofont-bag" />
          </p>
          My Order
        </a>
        <a
          onClick={() => handleClick("/SellHere")}
          href="/"
          className="text-muted small col text-decoration-none p-2"
        >
          <p className="h5 m-0">
            <i className="icofont-user" />
          </p>
          Account
        </a>
      </div>
    </div>
  );
}
