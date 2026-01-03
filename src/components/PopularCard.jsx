import React from "react";
import { useNavigate } from "react-router-dom";
import cake from "../assets/cake.jpg";
import offers from "../assets/offers.png";
import star from "../assets/star.png";

const PopularCard = ({ restaurants }) => {
  const navigate = useNavigate();

  //sendig static data because api is not giving the response
  const handleClick = (item) => {
    navigate("/productdetails", {
      state: {
        image: cake,
        name: item.restaurant_name,
        address:
          item.address_complete !== "null"
            ? item.address_complete
            : "Connaught Place, New Delhi",
        rating: 4.5,
        offersText: "4 Offers Trending",
        description:
          "Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache",
      },
    });
  };

  return (
    <>
      <div>
        <h2 className="text-lg font-semibold mb-3">Popular Ones</h2>

        <div className="space-y-4">
          {restaurants?.slice(0, 5)?.map((item) => (
            <div
              key={item.restaurant_id}
              onClick={() => handleClick(item)}
              className="flex gap-4 bg-white rounded-xl p-3 shadow-card"
            >
              <img
                src={cake}
                alt={item.restaurant_name}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-sm">
                  {item.restaurant_name}
                </h3>

                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                  {item.address_complete !== "null"
                    ? item.address_complete
                    : "No address available"}
                </p>
                <div className="flex items-center gap-2 text-orange-500 text-sm mt-2">
                  <img src={offers} className="w-3" alt="" />
                  <span className="text-[12px]">4 Offers Trending</span>
                </div>

                <div className="flex items-center justify-between gap-3 mt-2 text-xs text-gray-500">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1">
                      <img src={star} className="w-4 h-4 fill" alt="star" />
                      <span className="text-sm font-medium text-black">
                        4.5
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">Popularity</p>
                  </div>

                  <div className="flex flex-col items-end">
                    <p className="text-sm font-medium text-black">₹200</p>
                    <p className="text-xs text-gray-500">Cost for two</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularCard;
