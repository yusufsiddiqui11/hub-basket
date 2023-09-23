import React, { Component } from "react";


export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cabbageCount: 0,
    };
  }
  handleIncrease = (event) => {
    const inputElement = event.target.parentNode.parentNode.querySelector(
      "input"
    );
    inputElement.value = parseInt(inputElement.value) + 1;
  };

  handleDecrease = (event) => {
    const inputElement = event.target.parentNode.parentNode.querySelector(
      "input"
    );
    if (parseInt(inputElement.value) > 1) {
      inputElement.value = parseInt(inputElement.value) - 1;
    }
  };

  render() {
    return (
      <div>
        <div className="osahan-listing">
          <div className="p-3">
            
            <div className="d-flex align-items-center"style={{ marginTop: "120px" }}>
              <a
                className="font-weight-bold text-success text-decoration-none"
                href="/"
              >
                <i className="icofont-rounded-left back-page" />
              </a>
              <span className="font-weight-bold ml-3 h6 mb-0">Vegetables</span>
              <a className="toggle ml-auto" href="#">
                <i className="icofont-navigation-menu" />
              </a>
            </div>
          </div>
          <div className="osahan-listing px-3 bg-white">
            <div className="row border-bottom border-top">
              <div className="col-6 p-0 border-right">
                <div className="list-card-image">
                  <a href="/product-detail" className="text-dark">
                    <div className="member-plan position-absolute">
                    
                    </div>
                  </a>
                  <div className="p-3">
                    <a href="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v1.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Chilli</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <a href="/product-detail" className="text-dark">
                        <h6 className="price m-0 text-success"style={{ fontWeight: "bold" }}>₹30/kg</h6>
                      </a>
                      <a
                        href="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="list-card-image">
                  <a href="/product-detail" className="text-dark">
                    <div className="member-plan position-absolute">
                    
                    </div>
                  </a>
                  <div className="p-3">
                    <a href="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v2.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Onion</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <a href="/product-detail" className="text-dark">
                        <h6 className="price m-0 text-success"style={{ fontWeight: "bold" }}>₹20/kg</h6>
                      </a>
                      <a className="ml-auto" href="/cart">
                        <div className="input-group input-spinner ml-auto cart-items-number">
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-success btn-sm"
                              type="button"
                              id="button-plus"
                            >
                              +
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={0}
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-success btn-sm"
                              type="button"
                              id="button-minus"
                            >
                              −
                            </button>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col-6 p-0 border-right">
                <div className="list-card-image">
                  <a href="/product-detail" className="text-dark">
                    <div className="member-plan position-absolute">
                    </div>
                  </a>
                  <div className="p-3">
                    <a href="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v3.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Tomato</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <a href="/product-detail" className="text-dark">
                        <h6 className="price m-0 text-success"style={{ fontWeight: "bold" }}>₹40/kg</h6>
                      </a>
                      <a
                        href="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
  <div className="list-card-image">
    <a href="/product-detail" className="text-dark">
      <div className="member-plan position-absolute">
      </div>
    </a>
    <div className="p-3">
      <a href="/product-detail" className="text-dark">
        <img
          src="img/listing/v4.jpg"
          className="img-fluid item-img w-100 mb-3"
        />
        <h6>Cabbage</h6>
      </a>
      <div className="d-flex align-items-center">
        <a href="/product-detail" className="text-dark">
          <h6 className="price m-0 text-success" style={{ fontWeight: "bold" }}>
            ₹45/kg
          </h6>
        </a>
        {this.state.cabbageCount === 0 ? (
          <button
            className="btn btn-success btn-sm ml-auto"
            onClick={() => this.setState({ cabbageCount: 1 })}
          >
            ADD
          </button>
        ) : (
          <a href="/cart" className="btn btn-success btn-sm ml-auto">
            +
          </a>
        )}
      </div>
    </div>
  </div>
</div>

            </div>
            <div className="row border-bottom">
              <div className="col-6 p-0 border-right">
                <div className="list-card-image">
                  <a href="/product-detail" className="text-dark">
                    <div className="member-plan position-absolute">
                      
                    </div>
                  </a>
                  <div className="p-3">
                    <a href="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v5.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Cauliflower</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <a href="/product-detail" className="text-dark">
                        <h6 className="price m-0 text-success"style={{ fontWeight: "bold" }}>₹38/kg</h6>
                      </a>
                      <a className="ml-auto" href="/cart">
                        <div className="input-group input-spinner ml-auto cart-items-number">
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-success btn-sm"
                              type="button"
                              id="button-plus"
                            >
                              +
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={0}
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-success btn-sm"
                              type="button"
                              id="button-minus"
                            >
                              −
                            </button>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="list-card-image">
                  <a href="/product-detail" className="text-dark">
                    <div className="member-plan position-absolute">
                      {/*<span className="badge m-3 badge-success">10%</span>*/}
                    </div>
                  </a>
                  <div className="p-3">
                    <a href="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v6.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Carrot</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <a href="/product-detail" className="text-dark">
                        <h6 className="price m-0 text-success"style={{ fontWeight: "bold" }}>₹37/kg</h6>
                      </a>
                      <a
                        href="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col-6 p-0 border-right">
                <div className="list-card-image">
                  <a href="/product-detail" className="text-dark">
                    <div className="member-plan position-absolute">
                      
                    </div>
                  </a>
                  <div className="p-3">
                    <a href="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v7.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Star Anise</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <a href="/product-detail" className="text-dark">
                        <h6 className="price m-0 text-success"style={{ fontWeight: "bold" }}>₹50/kg</h6>
                      </a>
                      <a
                        href="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="list-card-image">
                  <a href="/product-detail" className="text-dark">
                    <div className="member-plan position-absolute">
                      
                    </div>
                  </a>
                  <div className="p-3">
                    <a href="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v8.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Brinjal</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <a href="/product-detail" className="text-dark">
                        <h6 className="price m-0 text-success"style={{ fontWeight: "bold" }}>₹20/kg</h6>
                      </a>
                      <a
                        href="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col-6 p-0 border-right">
                <div className="list-card-image">
                  <a href="/product-detail" className="text-dark">
                    <div className="member-plan position-absolute">
                      
                    </div>
                  </a>
                  <div className="p-3">
                    <a href="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v9.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Capsicum</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <a href="/product-detail" className="text-dark">
                        <h6 className="price m-0 text-success"style={{ fontWeight: "bold" }}>₹32/kg</h6>
                      </a>
                      <a
                        href="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="list-card-image">
                  <a href="/product-detail" className="text-dark">
                    <div className="member-plan position-absolute">
                      
                    </div>
                  </a>
                  <div className="p-3">
                    <a href="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v10.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Lady Finger</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <a href="/product-detail" className="text-dark">
                        <h6 className="price m-0 text-success"style={{ fontWeight: "bold" }}>₹25/kg</h6>
                      </a>
                      <a
                        href="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row border-bottom">
              <div className="col-6 p-0 border-right">
                <div className="list-card-image">
                  <a href="/product-detail" className="text-dark">
                    <div className="member-plan position-absolute">
                      
                    </div>
                  </a>
                  <div className="p-3">
                    <a href="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v11.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Garlic</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <a href="/product-detail" className="text-dark">
                        <h6 className="price m-0 text-success"style={{ fontWeight: "bold" }}>₹60/kg</h6>
                      </a>
                      <a
                        href="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="list-card-image">
                  <a href="/product-detail" className="text-dark">
                    <div className="member-plan position-absolute">
                    
                    </div>
                  </a>
                  <div className="p-3">
                    <a href="/product-detail" className="text-dark">
                      <img
                        src="img/listing/v12.jpg"
                        className="img-fluid item-img w-100 mb-3"
                      />
                      <h6>Ginger</h6>
                    </a>
                    <div className="d-flex align-items-center">
                      <a href="/product-detail" className="text-dark">
                        <h6 className="price m-0 text-success"style={{ fontWeight: "bold" }}>₹36/kg</h6>
                      </a>
                      <a
                        href="/cart"
                        className="btn btn-success btn-sm ml-auto"
                      >
                        +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 text-center border-bottom border-top fixed-bottom bg-white">
          <div className="col-6 p-0 border-right">
            <a
              href="#"
              data-toggle="modal"
              data-target="#exampleModal"
              className="btn text-muted"
            >
              <i className="icofont-filter mr-2" /> Filter
            </a>
          </div>
          <div className="col-6 p-0">
            <a
              href="#"
              data-toggle="modal"
              data-target="#exampleModal"
              className="btn text-muted"
            >
              <i className="icofont-signal mr-2" /> Sort
            </a>
          </div>
        </div>
      </div>
    );
  }
}
