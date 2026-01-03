import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StatusBar from "./StatusBar";
import back from "../assets/back.png";
import star from "../assets/star.png";
import offers from "../assets/offers.png";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) return <p>No product data</p>;

  return (
    <div className="h-218.75 w-93.75 bg-white mx-auto overflow-hidden">
      <StatusBar />

      <div className="relative">
        <img
          src={state.image}
          alt={state.name}
          className="w-full h-105 object-cover"
        />

        <img
          onClick={() => navigate("/dashboard")}
          className="absolute top-4 w-6 left-2.75"
          src={back}
          alt=""
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>

      <div className="rounded-t-3xl bg-white mt-6 p-4 shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">{state.name}</h2>
            <p className="text-sm text-gray-500 max-w-52">{state.address}</p>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <img src={star} className="w-4" alt="" />
            <span className="font-medium">{state.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-orange-500 text-sm mt-2">
          <img src={offers} className="w-4" alt="" />
          <span>{state.offersText}</span>
        </div>

        <p className="text-gray-600 text-sm mt-8 leading-relaxed">
          {state.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
