import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import MediaGallery from "./components/MediaGallery";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import "./App.css";
import GetUpdatedButton from "./components/Getupdatedbutton";
import PromoAnimation from "./components/PromoAnimation";


function App() {
  return (
    <div>
      <Header />
      <Carousel />  
      <Categories />
      <FeaturedProducts />
      <PromoAnimation/>
      <MediaGallery />
      <GetUpdatedButton/>
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;