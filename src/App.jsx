import { React } from 'react'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import Slider from './Components/Slider/slider'
import Pricing from './Components/Pricing/pricing'
import {Outlet  } from "react-router-dom";

function App() {

  return (
    <>
    <Header />
    {/* <Slider />
    <Pricing /> */}
    <Outlet />
    <Footer />
    </>
  )
}

export default App
