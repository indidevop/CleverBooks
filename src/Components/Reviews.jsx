import React from "react";
import { samosa } from "../assets";

const Reviews = () => {
  return (
    <div className="reviews-container flex w-full flex-col lg:flex-row">
      <div className="review-top lg:w-[40%] lg:order-last lg:mx-5">
        <img
          src={samosa}
          alt=""
          className="m-auto object-cover w-[90vw] h-[80vh] lg:h-full lg:object-[85%_50%] border-2 rounded-3xl border-[#dbcef1]"
        />
      </div>
      <div className="review-bottom mx-6 lg:w-[60%]">
        <p className="desc text-[17px]">
          D2C brands face issues with supply chain management and high growth
          startups are not equipped to run their demand forecast manually. Crest
          automates all the workflows and helps brands predict high demand
          periods and be ready to cater to customer demands. It has a direct
          impact on the revenue readiness of a company and that's the value we
          see Crest unlocking for many companies in the future. Rahul and team
          have built a robust product with years of their
        </p>
        <div className="founder my-8 flex items-center">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp"
            alt=""
            className="w-[60px] rounded-full"
          />
          <div className="info ml-5 flex justify-between items-center w-full">
            <div>
            <h2 className="font-bold">Emma Watson</h2>
            <p>Co-founder, Samosa Party</p>
            </div>
            <div className="hidden lg:block order-last">
            <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg" alt="" className="w-[100px]"/>
            </div>
          </div>
          
          
        </div>

        <div className="leftright hidden lg:flex">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
            alt=""
            className="rotate-180 mr-5 hover:cursor-pointer"
          />
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
            alt=""
            className="hover:cursor-pointer"
          />
        </div>

        <div className="cards flex justify-evenly items-center lg:mt-[5rem]">
          <div className="card1 bg-[#f1eafc] w-[50%] lg:w-1/3 p-3 py-5 m-2 rounded-2xl text-center">
            <h2 className="h2-gradient">upto 95%</h2>
            <p className="font-[18px] leading-[28px]">Demand fulfillment</p>
          </div>
          <div className="card2 bg-[#f1eafc] w-[50%] lg:w-1/3 p-3 py-5 m-2 rounded-2xl text-center">
            <h2 className="h2-gradient">3%</h2>
            <p className="font-[18px] leading-[28px]">Daily</p>
          </div>
          <div className="btn-sec-mob hidden lg:block w-1/3  m-2 rounded-2xl text-center p-[2px]">
            <div className="btn-sec-bg-mob-sp flex flex-col justify-center items-center rounded-2xl text-[16px] font-semibold leading-[24px] p-3 py-6">
              <p className="text-primary">Read story</p>
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dd545ea3ebe_Vector.svg"
                alt=""
                className="mt-2"
              />
            </div>
          </div>
        </div>
        <div className="navbtns flex mt-8 justify-between w-[80vw] lg:hidden">
          <div className="btn-sec">
            <div className="btn-sec-bg flex items-center justify-center">
              <p className="text-primary">Read story</p>
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dd545ea3ebe_Vector.svg"
                alt=""
                className="px-2"
              />
            </div>
          </div>

          <div className="leftright flex">
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
              alt=""
              className="rotate-180 mr-5 hover:cursor-pointer"
            />
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
              alt=""
              className="hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
