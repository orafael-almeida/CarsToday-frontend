"use client";

import Link from "next/link";
import VehicleMakeSelector from "./components/VehicleMakeSelector";
import VehicleYearSelector from "./components/VehicleYearSelector";
import { FilterProvider, useFilter } from "./contexts/FilterContext";
import MainSection from "./sections/MainSection";

const HomeContent = () => {
  const { selectedMakeId, selectedYear } = useFilter();

  return (
    <div className="flex flex-col justify-between items-center gap-16 pt-24">
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2">
        <p className="">Select car model and year:</p>
        <div className="flex justify-center items-center gap-2">
        <VehicleMakeSelector />
        <VehicleYearSelector />
        <Link
          href={
            selectedMakeId && selectedYear
              ? `/result/${selectedMakeId}/${selectedYear}`
              : "#"
          }
          className={`bg-red-500 h-9 px-6 rounded-lg text-white font-medium flex items-center justify-center ${
            selectedMakeId && selectedYear
              ? ""
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          Next
        </Link>
        </div>
      </section>
      <MainSection />
    </div>
  );
};

export default function Home() {
  return (
    <FilterProvider>
      <HomeContent />
    </FilterProvider>
  );
}
