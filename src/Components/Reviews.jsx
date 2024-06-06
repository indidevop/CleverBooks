import React, { useState } from "react";
import { arr } from "../assets";

const Reviews = () => {
  
  const [index, setindex] = useState(0)
  const leftHandler=()=>{
      if(index>0)
        {
          setindex(index-1);
        }
  }
  const rightHandler=()=>{    
      if(index>=0 && index<(arr.length-1))
        {
          setindex(index+1);
        }
  }
  return (
    <div className="reviews-container flex w-full flex-col justify-center items-center lg:flex-row">
      <div className="review-top w-[90%] lg:w-[40%] lg:order-last lg:mx-5">
        <img
          src={arr[index].img}
          alt=""
          className=" mx-auto object-contain  md:object-cover md:w-[90vw] md:h-[100vh] lg:object-[85%_50%] border-2 rounded-3xl border-[#dbcef1]"
        />
      </div>
      <div className="review-bottom mx-6 lg:w-[60%]">
        <p className="desc text-[17px] pt-5 text-justify md:pt-0 md:text-left">
          {arr[index].desc}
        </p>
        <div className="founder my-8 flex items-center">
          <img
            src={arr[index].profileimg}
            alt=""
            className="w-[60px] rounded-full"
          />
          <div className="info ml-5 flex justify-between items-center w-full">
            <div>
              <h2 className="font-bold">{arr[index].name}</h2>
              <p>{arr[index].desig}</p>
            </div>
            <div className="hidden lg:block order-last">
              <img
                src={arr[index].logo}
                alt=""
                className="w-[80px]"
              />
            </div>
          </div>
        </div>

        <div className="leftright hidden lg:flex">
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
            alt=""
            className="rotate-180 mr-5 hover:cursor-pointer"
            onClick={leftHandler}
          />
          <img
            src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
            alt=""
            className="hover:cursor-pointer"
            onClick={rightHandler}
          />
        </div>

        <div className="cards flex justify-evenly items-center lg:mt-[5rem]">
          <div className="card1 bg-[#f1eafc] w-[50%] lg:w-1/3 p-3 py-5 m-2 rounded-2xl text-center">
            <h2 className="h2-gradient">{arr[index].card1}</h2>
            <p className="font-[1rem]">{arr[index].card1desc}</p>
          </div>
          <div className="card2 bg-[#f1eafc] w-[50%] lg:w-1/3 p-3 py-5 m-2 rounded-2xl text-center">
            <h2 className="h2-gradient">{arr[index].card2}</h2>
            <p className="font-[1rem]">{arr[index].card2desc}</p>
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
        <div className="navbtns flex mt-8 justify-between w-full lg:hidden px-2">
          <div className="btn-sec flex">
            <div className="btn-sec-bg flex items-center justify-center">
              <p className="text-primary">Read story</p>
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dd545ea3ebe_Vector.svg"
                alt=""
                className="pl-2"
              />
            </div>
          </div>

          <div className="leftright flex">
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
              alt=""
              className="w-[50px] md:w-[100px] rotate-180 mr-2 hover:cursor-pointer"
              onClick={leftHandler}
            />
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
              alt=""
              className="w-[50px] md:w-[100px] hover:cursor-pointer"
              onClick={rightHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
