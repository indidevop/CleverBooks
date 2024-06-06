import React from "react";
import { logo, twitter, meta, insta, linkedin } from "../assets";
const Footer = () => {
  return (
    <div className="text-white bg-[#151318] lg:px-16 lg:pt-8">
      <div className="upper-div lg:flex lg:justify-between">
        <div className="logo-div p-[1.2rem] lg:w-[40%]">
          <div className="logo-foot flex items-center ">
            <img
              src={logo}
              alt=""
              className="w-[45px]
        h-[35px]"
            />
            <p className="pl-3 font-bold text-3xl">CleverBooks</p>
          </div>
          <p className="hidden lg:block hidden-nav-text mt-6 pr-2">
            CleverBooks is an AI-powered supply chain software that provides
            companies tools for demand forecasting, inventory planning and more.
            This helps them have the right amount of stock, optimise space and
            fulfil every order.
          </p>
        </div>
        {/*  */}
        <div className="nav-add flex flex-wrap lg:w-[60%]">
          <div className="sec sec-1 ">
            <ul>
              <li>Explore</li>
              <li>Product</li>
              <li>Pricing</li>
              <li>Customer Stories</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="sec sec-2 ">
            <ul>
              <li>Learn</li>
              <li>About us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="sec sec-3 w-[300px]">
            <ul>
              <li>Contact CleverBooks</li>
              <li className="mail">sales@cleverbooks.com</li>
              <li>
                Registered Office: <br />
                0000, Heydog, 12th cross road, 199th Main Road, Bengaluru,
                India. 560102
              </li>
              <li>
                Corporate Office: <br />
                111, All Time Space, 1th Floor, 10th C Cross, Sector - 67, HSR
                Layout, Bengaluru, India. 560102
              </li>
            </ul>
            <ul className="social flex">
              <li>
                <img src={twitter} alt="" />
              </li>
              <li>
                <img src={meta} alt="" />
              </li>
              <li>
                <img src={insta} alt="" />
              </li>
              <li>
                <img src={linkedin} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bottom p-[1.2rem] lg:flex lg:justify-between">
        <img
          src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d53d1ea3ece_go-to-top.svg"
          alt=""
          className="mx-auto my-8 lg:order-last lg:mx-0"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
        <div>
          <ul className="flex flex-wrap">
            <li>Copyright 2024 CleverBooks</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
          <p>Conifer Innovations Private Limited</p>
          <p>CIN: U72900KA2022PTC163144</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
