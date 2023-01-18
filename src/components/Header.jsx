import { useState } from "react";
import { IMG_CDN_URL } from "../constants";
// Named export
const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={IMG_CDN_URL} alt="Title-logo" />
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
