import React from "react";
import Image from "../Image";
import Paragraph from "../Paragraph";
import Clock from "../../assets/images/clock.png";
import { FaHeart, FaSyncAlt, FaShoppingCart } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="flex flex-col  items-center">
      <div className="relative w-1/4 group overflow-hidden">
        <Image src={Clock} className="w-full" />
        <div className="absolute bg-black px-7 py-2 text-white top-5 left-5">
          New
        </div>
        <div
          className="absolute w-full py-6 bg-white flex flex-col gap-5   duration-300 
           transform translate-y-full group-hover:translate-y-0 group-hover:bottom-0
        "
        >
          <div className="flex gap-4 text-base text-[#767676] justify-end mx-7 items-center ">
            <Paragraph text="Add to Wish List" className="" />
            <FaHeart className="text-black" />
          </div>
          <div className="flex gap-4 text-base text-[#767676] justify-end mx-7 items-center">
            <Paragraph text="Compare" className="" />
            <FaSyncAlt className="text-black" />
          </div>
          <div className="flex gap-4 text-base text-[#767676] justify-end mx-7 items-center">
            <Paragraph text="Add to Cart" className="" />
            <FaShoppingCart className="text-black" />
          </div>
        </div>
      </div>
      <div>
        <p></p>
        <p></p>
      </div>
      <p></p>
    </div>
  );
};

export default Cards;
