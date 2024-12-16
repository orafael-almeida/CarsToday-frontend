"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Model {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

const CarsTable = () => {
  const [models, setModels] = useState<Model[]>([]);
  const pathname = usePathname();

  // Extract makeId and year from the pathname
  const pathSegments = pathname.split("/");
  const makeId = pathSegments[2];
  const year = pathSegments[3];

  useEffect(() => {
    if (makeId && year) {
      const fetchCars = async () => {
        try {
          const response = await axios.get(
            `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
          );
          setModels(response.data.Results || []);
        } catch (err) {
          console.error(err);
        }
      };

      fetchCars();
    }
  }, [makeId, year]);

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
