import { useState } from "react";
import { IMG_CDN_URL } from "../constants";
import logo from "../assets/images/fv_logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      {/* <img className="logo" src={IMG_CDN_URL} alt="Title-logo" /> */}
      <img className="logo" src={logo} alt="Title-logo" />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const LoggedInUser = (isLoggedInVal) => {
    setIsLoggedIn(!isLoggedInVal);
    console.log("inside LoggedInUser", isLoggedIn);
  };

  return (
    <div className="header" style={{ backgroundColor: "lightgray" }}>
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>Cart</li>
          {isLoggedIn ? (
            <button
              onClick={() => {
                console.log("isLoggedInVal", isLoggedIn);
                LoggedInUser(true);
              }}
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                console.log("isLoggedInVal", isLoggedIn);
                LoggedInUser(false);
              }}
            >
              Logout
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

//Default export
export default Header;
