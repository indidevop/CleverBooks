import React from "react";
import CTAForm from "./CTAForm"
import { useState } from "react";
const CTASection = () => {
    const [active, setactive] = useState(false);
  return (
    <div className="relative">
    <CTAForm active={active} setactive={setactive}/>
    <div className="bg-[#151318] h-[120vh]  flex justify-center items-center p-[1rem] z-0">
      <div className="grow-card flex justify-center flex-col mx-2 md:mx-5 rounded-3xl gradient-bg-anim text-center p-8 md:p-16 md:py-8 lg:py-28 lg:my-5">
        <h1 className=" text-white font-semibold lg:text-[50px] text-[1.5rem]">You can grow faster than you think!</h1>
        <p className="lg:w-[60%] text-[1rem] text-white my-5 mx-auto mt-[2rem]">
          Plan with Crest to fulfil your demand today, and dreams tomorrow. We
          bring the methods and technologies of large global companies to help
          brands of all sizes scale.
        </p>
        <button className="md:my-5 mx-auto p-3 bg-[#151318] text-white rounded-full font-semibold lg:w-[20vw] text-[1rem]" onClick={()=>{setactive(true)}}>Get started with CleverBooks</button>
      </div>
    </div>
    </div>
  );
};

export default CTASection;
