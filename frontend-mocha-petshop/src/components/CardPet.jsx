import React from "react";
import star from "../assets/star.png";
import { Link } from "react-router-dom";

const CardPet = ({ img, name, rating, sold, des, price }) => {
  return (
    <>
       <div className="flex flex-col text-left rounded-lg shadow-lg pl-5 p-8">
              <img src={img} alt="" />
              <h2 className="font-semibold text-left pt-1">{name}</h2>
              <div class="flex flex-wrap items-start space-x-0.5">
                <img src={star} alt="star" />
                <p className="font-semibold text-[0.75rem] text-slate-900 pl-2">{rating}<span className="text-slate-400"> • </span>
                <span className="font-medium underline underline-offset-2">{sold} terjual</span></p>
              </div>
              <p className="text-slate-500 text-xs leading-normal my-1">{des}</p>
              <div className="flex py-2">
                <Button className="flex text-left right-0 pt-4 pr-5">Masukkan Keranjang</Button>
                <h3 className="text-right text-sm text-slate-900 pl-10 py-2">{price}</h3>
              </div>
              <Link to={`/pet/${id}`} className="px-4 py-2 bg-orange-400 rounded-xl text-white">
                Detail
              </Link>
        </div>
    </>
  );
};

export default CardPet;