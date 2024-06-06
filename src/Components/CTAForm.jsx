import React from "react";
import { crosssmall } from "../assets";
const CTAForm = ({ active, setactive }) => {
  return (
    <div
      className={`bg-[#2e2e2edb] h-[120vh] absolute z-20 w-full ${
        active === true ? "flex" : "hidden"
      }`}
    >
      <div className="w-[80%] md:w-[70%] lg:w-[40%] p-8 m-auto bg-[#f1eafc] rounded-3xl flex flex-col relative">
        <img
          src={crosssmall}
          alt="close"
          className="w-[10px] absolute right-5 top-5 hover:cursor-pointer"
          onClick={() => {
            setactive(false);
          }}
        />
        <h2 className="text-center font-semibold">
          Get started with CleverBooks
        </h2>
        <p className="text-center text-xs my-2">
          Take a free tour of our platform
        </p>
        <form action="" className="flex flex-col">
          <label htmlFor="name">First name*</label>
          <input type="text" name="name" id="name" placeholder="Amey" />

          <label htmlFor="lname">Last name*</label>
          <input type="text" name="lname" id="lname" placeholder="Sawalkar" />

          <label htmlFor="email">Work email*</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="ameykishor@gmail.com"
          />

          <label htmlFor="phone">Phone number*</label>
          <input type="text" name="phone" id="phone" placeholder="7397892327" />

          <label htmlFor="comp">Company name*</label>
          <input type="text" name="comp" id="comp" placeholder="PatilKaki" />

          <button
            type="submit"
            className="submit my-3 w-[25%] rounded-full text-xs font-semibold p-2 mx-auto"
          >
            Submit
          </button>

          <p className="text-center text-sm font-semibold">
            Already have an account?{" "}
            <a href="#" className="text-primary-native">
              Log In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CTAForm;
