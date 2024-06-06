import React from "react";
import { useState } from "react";
import arr from "../assets/itemdata";
import ItemListCard from "./ItemListCard";

const CouldDo = () => {
  const [Image, setImage] = useState(arr[0].img);
  const collapseToggle = (event) => {
    const h2Element = event.currentTarget.querySelector("h2");
    if (h2Element.classList.contains("text-primary")) {
      h2Element.classList.remove("text-primary");
      h2Element.classList.add("collapsed");
      event.currentTarget.classList.remove("active");
    } else {
      h2Element.classList.add("text-primary");
      h2Element.classList.remove("collapsed");
      event.currentTarget.classList.add("active");
    }
    const divElement = event.currentTarget.querySelector("div");
    if (divElement.classList.contains("hidden-list")) {
      divElement.classList.remove("hidden-list");
    } else {
      divElement.classList.add("hidden-list");
    }
    const id = event.currentTarget.getAttribute("data-index");
    setImage(arr[id].img);
  };

  return (
    <div>
      <h1 className="pt-16 pb-10 text-center font-bold text-[25px] leading-[56px] lg:text-[40px] lg:py-16">
        Things your spreadsheet wishes it could do
      </h1>

      <div className="lg:flex">
        <div className="imgs m-5 rounded-3xl px-5 py-16 lg:order-last lg:w-1/2 lg:pr-0 lg:rounded-r-none lg:mr-0 flex">
          <img src={Image} alt="" className="mx-auto object-contain fade" />
        </div>

        <div className="open-list mx-5 lg:w-1/2 lg:px-3">
          {arr.map((item, index) => {
            return (
              <ItemListCard
                title={item.title}
                key={index}
                index={index}
                collapseToggle={collapseToggle}
              />
            );
          })}
        </div>
      </div>

      <div className="btn-sec-mob my-14 rounded-full text-center p-[2px] w-[150px] mx-auto">
        <div className="btn-sec-bg-mob rounded-full font-semibold py-2">
          <p className="text-primary-native text-[15px]">View all features</p>
        </div>
      </div>
    </div>
  );
};

export default CouldDo;
