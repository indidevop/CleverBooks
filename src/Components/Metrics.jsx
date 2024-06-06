import React, { useEffect } from "react";
import {metrics} from "../assets"

const Metrics = () => {

  return (
    <div className="metrics hidden h-[100vh] lg:flex w-full">
      <img src={metrics} alt="" className="object-cover"/>
    </div>
  );
};

export default Metrics;
