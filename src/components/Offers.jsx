import React from "react";
import discount from "../assets/discount.png";
import wallet from "../assets/wallet.png";

const Offers = () => {
  return (
    <div className="w-93.75 h-30 flex flex-wrap justify-around items-center flex-row">
      <div className="bg-gray-100 shadow-sm rounded-lg py-4">
        <h3 className="font-bold text-lg text-gray-400 tracking-widest ">
          Karan
        </h3>
        <h3 className="font-bold ">
          Let's explore this <br /> evening
        </h3>
      </div>
      <div>
        <img className="w-10" src={discount} alt="" />
        <h3>Offers</h3>
      </div>
      <div>
        <img className="w-10" src={wallet} alt="" />
        <h3>Wallet</h3>
      </div>
    </div>
  );
};

export default Offers;
