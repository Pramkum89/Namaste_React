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
  return (
    <div className="header" style={{ backgroundColor: "lightgray" }}>
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Default export
export default Header;
