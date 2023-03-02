import React from "react";

const Card = ({ name, image, current_price, price_change_percentage_24h }) => {
  return (
    <div className="container mx-auto pl-7 p py-2 grid grid-cols-3 text-center items-center bg-[#6B48FF] rounded-full text-white">
      <div className="flex gap-5 items-center">
        <img src={image} alt="" className="w-10 h-10 rounded-full border border-[#393E46]" />
        <h2>{name}</h2>
      </div>
      <p>{price_change_percentage_24h}%</p>
      <p>${current_price}</p>
    </div>
  );
};

export default Card;
