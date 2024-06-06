import React from "react";

const ItemListCard = ({title,index,collapseToggle}) => {

  return (
<div className="item" data-index={index} onClick={collapseToggle}>
          <h2 className="collapsed font-medium text-xs pb-2 leading-7">
            {title}
          </h2>
          <div className="collapsable hidden-list">
            <p className="py-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              debitis, excepturi repudiandae eaque distinctio eum nihil
              obcaecati harum, consectetur, nostrum deleniti vel dolorem. Aut
              nisi omnis labore explicabo exercitationem corporis.
            </p>
            <div className="flex items-center">
              <span className="text-primary pb-1 pr-2 font-medium">
                Learn more
              </span>
              <img
                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63ff3b3e4dc16be9322e8817_right%20arrow.svg"
                alt=""
                className="w-[20px]"
              />
            </div>
          </div>
        </div>
  );
};

export default ItemListCard;
