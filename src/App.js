import React from "react"
import ReactDOM from "react-dom/client"
import Header from './components/Header.jsx'
import Body from "./components/Body.js"
import Footer from "./components/Footer.js"

//Named import
// import { Title } from './components/Header'

//Default import
// import Header from "./components/Header"

/**
 * importing all as object
 * import * as obj from './components/Header'
   const Header = obj.Header
 */


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

/**
 * Dynamic data from object
 * const burgerKing = {
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dmi0pdcwjddzhlboew9g",
  name: "Burger King",
  cuisines: ["Burgers", "American"],
  rating: "4.2"
}
 */


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