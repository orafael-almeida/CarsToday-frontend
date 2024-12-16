"use client";

import VehicleMakeSelector from "./components/VehicleMakeSelector";
import VehicleYearSelector from "./components/VehicleYearSelector";
import { FilterProvider, useFilter } from "./contexts/FilterContext";
import Footer from "./sections/Footer";
import MainSection from "./sections/MainSection";

const HomeContent = () => {
  const { selectedMake, selectedYear } = useFilter();

  return (
    <div className="flex flex-col justify-between items-center gap-16 min-h-screen pt-24">
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <VehicleMakeSelector />
        <VehicleYearSelector />
        <button
          className={`bg-red-500 h-9 px-6 rounded-lg text-white font-medium ${
            selectedMake && selectedYear ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!selectedMake || !selectedYear}
        >
          Next
        </button>
      </section>
      <MainSection />
      <Footer />
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
