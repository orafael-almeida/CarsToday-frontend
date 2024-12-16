"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const VehicleMakeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<
    { MakeId: number; MakeName: string }[]
  >([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
      )
      .then((response) => {
        setOptions(response.data.Results);
      })
      .catch((error) => {
        console.error("Error when fetching MakeNames:", error);
      });
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-red-500 text-white focus:ring-2 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm h-9 px-6 text-center items-center"
        type="button"
      >
        Vehicle Make
      </button>
      {isOpen && (
        <div className="absolute z-10 w-48 max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow overflow-y-auto scrollbar-red">
          <ul
            className="p-3 space-y-1 text-sm text-gray-700"
            aria-labelledby="dropdownRadioBgHoverButton"
          >
            {options.map((option) => (
              <li key={option.MakeId}>
                <div
                  className={`flex items-center p-2 rounded ${
                    selectedOption === option.MakeName
                      ? "bg-red-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <input
                    id={`radio-${option.MakeId}`}
                    type="radio"
                    value={option.MakeName}
                    name="car-make"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    onChange={handleChange}
                    checked={selectedOption === option.MakeName}
                  />
                  <label
                    htmlFor={`radio-${option.MakeId}`}
                    className="w-full ml-2 text-sm font-medium text-gray-900 rounded"
                  >
                    {option.MakeName}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VehicleMakeSelector;
