import axios from "axios";
import React, { useEffect, useState } from "react";
import { TasteCard } from "./TasteCard";
import PopularCard from "./PopularCard";
import Offers from "./Offers";

const DashBoard = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const response = await axios.get(
        "https://staging.fastor.ai/v1/m/restaurant",
        {
          params: {
            city_id: 118,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data.results);
      setData(response.data.data.results);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  console.log();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen flex justify-center bg-gray-100">
        <div className="w-93.75 bg-gray-50 p-4 space-y-6">
          <div className="-mx-4 bg-white px-4 py-3 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.2)]">
            <p className="text-xs text-gray-400">Pre Order From</p>
            <h1 className="text-lg font-semibold">Connaught Place</h1>
          </div>

          <Offers />

          <TasteCard restaurants={data} />

          <div className="rounded-xl overflow-hidden mt-10 shadow-card">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              alt="Veg"
              className="w-full h-36 object-cover"
            />
          </div>

          <PopularCard restaurants={data} />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
