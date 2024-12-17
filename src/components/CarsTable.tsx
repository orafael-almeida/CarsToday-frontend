"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

interface Model {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

const CarsTable = ({ makeId, year }: { makeId: string; year: string }) => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (makeId && year) {
      const fetchCars = async () => {
        try {
          const url = process.env.NEXT_PUBLIC_VEHICLE_DATA_URL?.replace("{makeId}", makeId).replace("{year}", year);
          const response = await axios.get(url!
          );
          setModels(response.data.Results || []);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchCars();
    }
  }, [makeId, year]);

  if (loading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="relative overflow-x-auto overflow-y-auto md:px-16 lg:px-32 xl:px-64 h-[70vh] scrollbar-red">
      <table className="w-full text-sm text-center rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
          <tr>
            <th scope="col" className="sm:px-6 py-3">
              Make Name
            </th>
            <th scope="col" className="sm:px-6 py-3">
              Model Name
            </th>
            <th scope="col" className="sm:px-6 py-3">
              Make ID
            </th>
            <th scope="col" className="sm:px-6 py-3">
              Model ID
            </th>
          </tr>
        </thead>

        <tbody>
          {models.map((model) => (
            <tr
              key={model.Model_ID}
              className="bg-white border-b hover:bg-blue-50"
            >
              <td className="px-6 py-4">{model.Make_Name}</td>
              <td className="px-6 py-4">{model.Model_Name}</td>
              <td className="px-6 py-4">{model.Make_ID}</td>
              <td className="px-6 py-4">{model.Model_ID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarsTable;
