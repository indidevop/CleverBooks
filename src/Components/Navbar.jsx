import React from "react";
import { useState } from "react";
import { logo, burger, cross } from "../assets";

const Navbar = () => {
  const [Icon, setIcon] = useState(burger);
  const toggleAction = () => {
    let menu_list = document.getElementById("menu-list-mobile");
    setIcon(Icon === burger ? cross : burger);
    if (menu_list.classList.contains("hidden")) {
      menu_list.classList.remove("hidden");
      document.getElementsByClassName("navbar-color")[1].style.backgroundColor =
        "#151318";
    } else {
      menu_list.classList.add("hidden");
    }
  };
  let prevScrollPos = window.scrollY;

  function handleScroll() {
    if (Icon === burger) {
      let currentScrollPos = window.scrollY;

      if (currentScrollPos == 0) {
        document.getElementsByClassName(
          "navbar-color"
        )[0].style.backgroundColor = "transparent";
        document.getElementsByClassName(
          "navbar-color"
        )[1].style.backgroundColor = "transparent";
      } else {
        document.getElementsByClassName(
          "navbar-color"
        )[0].style.backgroundColor = "#0009";
        document.getElementsByClassName(
          "navbar-color"
        )[1].style.backgroundColor = "#0009";
      }
      if (prevScrollPos < currentScrollPos) {
        document.getElementById("navbar").style.transform =
          "translateY(-100px)";
      } else {
        document.getElementById("navbar").style.transform = "translateY(0)";
      }

      prevScrollPos = currentScrollPos;
    } else {
      document.getElementsByClassName("navbar-color")[1].style.backgroundColor =
        "#151318";
    }
  }

  window.onscroll = function () {
    handleScroll();
  };
  return (
    <>
      <nav id="navbar" className="z-[9999]">
        <div className="wide-nav-parent navbar-color w-full lg:flex justify-between items-center px-8 py-2 text-white hidden">
          <div className="logo-big flex items-center">
            <img
              src={logo}
              alt=""
              className="w-[45px]
        h-[35px]"
            />
            <p className="p-3 font-bold text-2xl">CleverBooks</p>
          </div>

          <ul className="nav-list flex justify-center items-center">
            <li className="text-[16px] leading-[28px]  py-5">
              <a href="" className="py-[5px] px-[15px] no-underline">
                Product
              </a>
            </li>
            <li className="text-[16px] leading-[28px]  py-5">
              <a href="" className="py-[5px] px-[15px] no-underline">
                Pricing
              </a>
            </li>
            <li className="text-[16px] leading-[28px]  py-5">
              <a href="" className="py-[5px] px-[15px] no-underline">
                Industry
              </a>
            </li>
            <li className="text-[16px] leading-[28px]  py-5">
              <a href="" className="py-[5px] px-[15px] no-underline">
                Customer Stories
              </a>
            </li>
            <li className="text-[16px] leading-[28px]  py-5">
              <a href="" className="py-[5px] px-[15px] no-underline">
                About
              </a>
            </li>
            <li className="text-[16px] leading-[28px]  py-5">
              <a href="" className="py-[5px] px-[15px] no-underline">
                Blog
              </a>
            </li>
          </ul>

          <div className="buttons flex">
            <button className="rounded-[100px] p-2 ml-5 w-28" id="login-btn">
              Login
            </button>
            <button className="rounded-[100px] p-2 ml-5 w-28" id="talk-btn">
              Talk to Us
            </button>
          </div>
        </div>

        {/* // small screens */}

        <div className="small-navbar navbar-color w-full flex justify-between items-center px-8 py-2 text-white lg:hidden relative -top-1">
          <div className="logo left flex items-center">
            <img
              src={logo}
              alt=""
              className="w-[35px]
        h-[35px]"
            />
            <p className="p-3 font-bold text-lg">CleverBooks</p>
          </div>
          <div className="right">
            <img
              src={Icon}
              alt=""
              className="w-[50px] h-[50px]"
              id="burger"
              onClick={toggleAction}
            />
          </div>
        </div>
      </nav>

      <div
        id="menu-list-mobile"
        className="lg:hidden hidden fixed inset-0 bg-white w-full h-full z-[9998] overflow-hidden"
      >
        <ul className="flex flex-col items-center nav-list mx-2 mt-32 h-[50vh] overflow-y-auto ">
          <li className="text-[16px] leading-[28px] text-left w-full py-5">
            <a href="" className="py-[5px] px-[15px] no-underline">
              Product
            </a>
          </li>
          <li className="text-[16px] leading-[28px] text-left w-full py-5">
            <a href="" className="py-[5px] px-[15px] no-underline">
              Pricing
            </a>
          </li>
          <li className="text-[16px] leading-[28px] text-left w-full py-5">
            <a href="" className="py-[5px] px-[15px] no-underline">
              Industry
            </a>
          </li>
          <li className="text-[16px] leading-[28px] text-left w-full py-5">
            <a href="" className="py-[5px] px-[15px] no-underline">
              Customer Stories
            </a>
          </li>
          <li className="text-[16px] leading-[28px] text-left w-full py-5">
            <a href="" className="py-[5px] px-[15px] no-underline">
              About
            </a>
          </li>
          <li className="text-[16px] leading-[28px] text-left w-full py-5">
            <a href="" className="py-[5px] px-[15px] no-underline">
              Blog
            </a>
          </li>
        </ul>
        <div className="mobile-btn w-full text-center relative bottom-0 h-[25vh] z-50 bg-white flex items-center justify-center">
          <button className="rounded-[100px] p-2 w-28" id="talk-btn">
            Talk to Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
