import React, { useState } from "react";
import { samosa } from "../assets";

const Reviews = () => {
  
  const arr = [
    {
      desc: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
      name: "Diksha Pande",
      desig: "Co-founder, Samosa Party",
      card1: "upto 95%",
      card1desc: "Demand Fulfillment",
      card2: "<3%",
      card2desc:"Daily Stock-out",
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp",
      profileimg:
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp",
      logo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg",
    },
    {
      desc: "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked. While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
      name: "Kirti Goel",
      desig: "Co-founder, P-TAL",
      card1: "Automated Invoice Reconciliation",
      card1desc: "",
      card2: "Channel wise Sales Classification",
      card2desc:"",
      img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664c90f75b0f0e735016706b_P-tal-p-500.webp",
      profileimg:
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddd1080709540ff764308_P-Tal%20founder.jpg",
      logo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664d8f654c71b6204bdf301c_P%20TAL%20logo.svg",
    },
  ];
  const [obj, setobj] = useState(arr[0]);
  return (
    <div className="reviews-container flex w-full flex-col justify-center items-center lg:flex-row">
      <div className="review-top w-[90%] lg:w-[40%] lg:order-last lg:mx-5">
        <img
          src={obj.img}
          alt=""
          className=" object-contain  md:object-cover md:w-[90vw] md:h-[100vh] lg:object-[85%_50%] border-2 rounded-3xl border-[#dbcef1]"
        />
      </div>
      <div className="review-bottom mx-6 lg:w-[60%]">
        <p className="desc text-[17px] pt-5 text-justify md:pt-0 md:text-left">
          {obj.desc}
        </p>
        <div className="founder my-8 flex items-center">
          <img
            src={obj.profileimg}
            alt=""
            className="w-[60px] rounded-full"
          />
          <div className="info ml-5 flex justify-between items-center w-full">
            <div>
              <h2 className="font-bold">{obj.name}</h2>
              <p>{obj.desig}</p>
            </div>
            <div className="hidden lg:block order-last">
              <img
                src={obj.logo}
                alt=""
                className="w-[100px]"
              />
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
            <h2 className="h2-gradient">{obj.card1}</h2>
            <p className="font-[1rem]">{obj.card1desc}</p>
          </div>
          <div className="card2 bg-[#f1eafc] w-[50%] lg:w-1/3 p-3 py-5 m-2 rounded-2xl text-center">
            <h2 className="h2-gradient">{obj.card2}</h2>
            <p className="font-[1rem]">{obj.card2desc}</p>
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
            />
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
              alt=""
              className="w-[50px] md:w-[100px] hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
