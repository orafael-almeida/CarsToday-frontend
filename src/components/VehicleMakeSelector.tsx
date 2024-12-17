"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useFilter } from "@/contexts/FilterContext";
import Spinner from "./Spinner";

interface MakeOption {
  MakeId: number;
  MakeName: string;
}

const VehicleMakeSelector = () => {
  const {
    isMakeOpen,
    setIsMakeOpen,
    setIsYearOpen,
    selectedMakeId,
    handleMakeChange,
  } = useFilter();

  const [options, setOptions] = useState<MakeOption[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = process.env.NEXT_PUBLIC_VEHICLES_MAKES_API;
    axios
      .get(fetchUrl!)
      .then((response) => {
        setOptions(response.data.Results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error when fetching MakeNames:", error);
        setLoading(false)
      });
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => {
          setIsMakeOpen(!isMakeOpen);
          setIsYearOpen(false);
        }}
        className="bg-red-500 text-white focus:ring-2 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm h-9 px-6 text-center items-center"
        type="button"
      >
        Vehicle Make
      </button>
      {isMakeOpen && (
        <div className="absolute z-10 w-48 max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow overflow-y-auto scrollbar-red">
          {loading ? (
            <Spinner />
          ) : (
            <ul
              className="p-3 space-y-1 text-sm text-gray-700"
              aria-labelledby="dropdownRadioBgHoverButton"
            >
              {options.map((option) => (
                <li key={option.MakeId}>
                  <div
                    className={`flex items-center p-2 rounded cursor-pointer ${
                      selectedMakeId === option.MakeId.toString()
                        ? "bg-red-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <input
                      id={`radio-${option.MakeId}`}
                      type="radio"
                      value={option.MakeId}
                      name="car-make"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 cursor-pointer"
                      style={{ pointerEvents: "none" }}
                      onChange={handleMakeChange}
                      checked={selectedMakeId === option.MakeId.toString()}
                    />
                    <label
                      htmlFor={`radio-${option.MakeId}`}
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded cursor-pointer"
                    >
                      {option.MakeName}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default VehicleMakeSelector;
