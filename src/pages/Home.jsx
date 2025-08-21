import React from "react";
import Slider from "react-slick";
import ProductList from "../components/ProductList";

// Slider data (अब सिर्फ captions रहेंगे)
const sliderImages = [
  { id: 1, caption: "Latest Fashion Deals" },
  { id: 2, caption: "Trending Gadgets Worldwide" },
  { id: 3, caption: "Shoes at Unbelievable Prices" },
];

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
   <div className="min-h-screen bg-gray-50">
  {/* Hero Section */}
  <section className="bg-blue-600 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-2xl md:text-4xl font-bold">
        Welcome to ShoppyGlobe
      </h1>
    </div>
  </section>

      {/* Text Only Slider Section */}
<section className="relative bg-blue-600 ">
  <Slider {...settings}>
    {sliderImages.map((item) => (
      <div
        key={item.id}
        className="flex items-center justify-center h-[50px] bg-blue-900 text-white"
      >
        <h2 className="text-lg md:text-2xl font-bold text-center justify-center">
          {item.caption}
        </h2>
      </div>
    ))}
  </Slider>
</section>


      {/* Products Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default Home;
