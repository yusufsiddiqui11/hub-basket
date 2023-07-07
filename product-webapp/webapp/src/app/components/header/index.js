import React, { Component } from "react";
import Login from "../../auth/login";
import { withRouter } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      searchtxt: "",
      width: window.innerWidth,
      categoryList: [],
      navBarHeight: 80, // Initial height of the navbar
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async getCategoryList() {
    // Add your logic to fetch the category list
  }

  async componentDidMount() {
    this.getCategoryList();
  }

  handleLogout = async (event) => {
    event.preventDefault();
    // Add your logout logic here
  };

  convertToSlug(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  }

  handleClickSearch = (event) => {
    event.preventDefault();
    let text = this.convertToSlug(this.state.searchtxt);
    this.props.history.push("/product/catalogsearch/result/" + text);
  };

  handleRedirectButton = (slug) => {
    this.props.history.push(`/shop/${slug}`);
    window.location.reload();
  };

  // Mobile view
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  // End mobile view

  render() {
    let { userName, categoryList, width, navBarHeight } = this.state;
    const isMobile = width <= 700;

    const navBarStyle = {
      height: `${100}px`,
      /*background: `url('img/bg.jpg')`, // Replace with the actual path to your background image
      opacity: 'backgroundOpacity(${70}%)',
      filter: `brightness(${100}%)`,*/
    };

    return (
      <div className="osahan-home-page">
        <div className="border-bottom p-3" style={navBarStyle}>

        <div className="title d-flex align-items-center">
          <a
            href="/"
            className="text-decoration-none text-dark d-flex align-items-center"
          >
            <img className="osahan-logo mr-2" src="img/gro.png" />
            <h3 className="font-weight-bold text-success m-0">
              <span style={{ color: "#2f4f4f" }}>Hub</span>{" "}
              <span style={{ color: "#ff1493" }}>Basket</span>
            </h3>
          </a>
            <p className="ml-auto m-0">
              <a
                href="/"
                className="text-decoration-none bg-white p-1 rounded shadow-sm d-flex align-items-center"
              >
                <i className="text-dark icofont-notification" />
                <span className="badge badge-danger p-1 ml-1 small">2</span>
              </a>
            </p>
            <a className="toggle ml-3" href="#">
              <i className="icofont-navigation-menu" />
            </a>
          </div>
          <a href="/" className="text-decoration-none">
            <div className="input-group mt-3 rounded shadow-sm overflow-hidden bg-white">
              <div className="input-group-prepend">
                <button className="border-0 btn btn-outline-secondary text-success bg-white">
                  <i className="icofont-search" />
                </button>
              </div>
              <input
                type="text"
                className="shadow-none border-0 form-control pl-0"
                placeholder="Search for Products.."
                aria-label
                aria-describedby="basic-addon1"
              />
            </div>
          </a>
        </div>
      </div>
    );
  }
}
export default withRouter(Navigation);
