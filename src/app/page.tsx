import VehicleMakeSelector from "./components/VehicleMakeSelector";
import VehicleYearSelector from "./components/VehicleYearSelector";
import Footer from "./sections/Footer";
import MainSection from "./sections/MainSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-28">
      <header className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <VehicleMakeSelector />
        <VehicleYearSelector />
        <button className="bg-red-500 h-9 px-6 rounded-lg text-white font-medium">
          Next
        </button>
      </header>
      <main className="flex-grow mt-24">
        <MainSection />
      </main>
      <Footer />
    </div>
  );
}
