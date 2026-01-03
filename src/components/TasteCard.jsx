import React from "react";
import cake from "../assets/cake.jpg";

export const TasteCard = ({ restaurants }) => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Your taste</h2>
          <button className="text-sm text-gray-400">see all</button>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {restaurants?.slice(0, 3).map((item) => (
            <div
              key={item.restaurant_id}
              className="min-w-30 h-40 rounded-xl shadow-card bg-white overflow-hidden"
            >
              <img
                src={cake}
                alt={item.restaurant_name}
                className="h-28 w-full object-cover"
              />

              <div className="p-2">
                <p className="text-sm font-semibold truncate">
                  {item.restaurant_name}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {item.address_complete !== "null"
                    ? item.address_complete
                    : "No address available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
