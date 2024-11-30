import React from "react";
import sun from "../assets/icons/sun.png"; // Ensure correct path for the imported icon

const Forecast = ({title,data}) => {
 // const data = [1, 2, 3, 4, 5]; // Mock data for forecast

  return (
    <div>
      {/* Header Section */}
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">{title}</p>
      </div>

      <hr className="my-1" />

      {/* Forecast Details */}
      <div className="flex items-center justify-between">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {/* Day */}
            <p className="font-light text-sm">{d.title}</p>

            {/* Weather Icon */}
            <img src={sun} alt="Weather Icon" className="w-12 my-1" />

            {/* Temperature */}
            <p className="font-medium">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
