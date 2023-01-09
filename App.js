import React from "react"
import ReactDOM from "react-dom/client"

/**
      * Planning the App components
      *  - Header
      *      - Logo
      *      - Nav Items (Cart)
      *      - Cart
      *  - Body
      *      - Search Bar
      *      - Restaurant List
      *          - Restaurant Card
      *              - Image
      *              - Name
      *              - Restaurant info (Cuisine)
      *              - Price
      *              - Star rating
      *  - Footer
      *      - Reference Links
      *      - Copyrights
      */

const Title = () => {
  return (
    <a href="/">
      <img className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZbPUWQIQ8CEwuTrWpEIo8kgEPj_HO0FunPO4O3_lrWConeJw1cXBE9LdLMuZ1-s6s2A&usqp=CAU"
        alt="Title-logo" />
    </a>

  )
}

const Header = () => {
  return (
    <div className="header" style={{ "backgroundColor": "lightgray" }} >
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
  )
}

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dmi0pdcwjddzhlboew9g" alt="card-img" />
      <h2>Burger King</h2>
      <h3>Burgers, American</h3>
      <h4>4.2 stars</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div>
      <RestaurantCard />
    </div>
  )
}


const Footer = () => {
  return <h2>Footer</h2>
}

const AppLayout = () => {
  return (
    <>
      <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)