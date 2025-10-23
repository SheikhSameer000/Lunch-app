import React from "react";
import burgerOclockBanner from "../../images/burgerOclockBanner.webp";
import kababjessBanner from "../../images/kababjeesBanner.webp";
import broadwayPizzaBanner from "../../images/broadwayBanner.jpg";
import qadriBriyani from "../../images/qadriBriyaniBanner.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Hero.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  const slides = [
    { image: qadriBriyani, title: "Qadri Nalli Biryani" },
    { image: burgerOclockBanner, title: "Burger O'Clock" },
    { image: broadwayPizzaBanner, title: "BroadWay Pizza" },
    { image: kababjessBanner, title: "KababJees Fried Chicken" },
  ];

  return (
    <>
      <section className="md:h-[60vh] h-36 w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-white"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="bg-black/50 p-6 rounded-xl text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-2">
                    {slide.title}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="w-full md:px-30 md:mt-10 flex justify-between">
        <h1 className="md:text-[2.5vw] text-3xl text-center">
          All Restaurants
        </h1>
        <SearchBar/>
      </div>
      <section className="w-full h-auto my-8 md:my-20 flex flex-col justify-center ">
        <Card />
      </section>
    </>
  );
};

export default Hero;
