import React from "react";
import { lefttext, girl } from "../assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col lg:flex-row bg-cover lg:bg-cover bg-[100%] h-[210vh] lg:h-[150vh]"
    >
      <div className="left-hero text-[white] px-[40px] lg:w-[50%]">
        <h1 className="first font-bold lg:text-[55px] lg:leading-[88px]">
          Every order <br /> fulfilled, <span id="title-span">on time.</span>
        </h1>
        <h2 className="next pt-4">
          Eliminate overstocking and under-stocking with Crest. Built by
          supply-chain experts, it brings the same technology used by large
          global brands to power fast-growing startups. In short, we make supply
          meet demand, and then help you grow both.
        </h2>
        <div className="btn-img relative">
          <div className="btn-sec-mob my-14 rounded-full text-center p-[2px] w-[45%]">
            <div className="btn-sec-bg-mob-hero rounded-full font-semibold py-2">
              <p className="text-primary-native text-[15px]">
                Get started with CleverBooks
              </p>
            </div>
          </div>
          <img
            src={lefttext}
            alt=""
            className="hover-img absolute right-[14%] top-[35%] lg:left-[50%] lg:top-[35%]"
          />
        </div>
      </div>
      <div className="right-hero w-[90%] mt-20 p-5 lg:mt-0 lg:w-[50%]">
        <img src={girl} alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
