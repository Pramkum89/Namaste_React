import React from "react"
import ReactDOM from "react-dom/client"
import Header from './components/Header.jsx'
import Body from "./components/Body.js"
import Footer from "./components/Footer.js"
import About from "./components/About.js"
import Error from "./components/Error.js"
import Contact from "./components/Contact.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)