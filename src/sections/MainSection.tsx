import Image from "next/image";
import volvoImg from "@/assets/images/volvo.webp"
import teslaImg from "@/assets/images/tesla.webp"
import bmwImg from "@/assets/images/bmw.webp"

const MOCK_CARS = [
  {
    model: "Volvo XC40",
    year: "2024/2024",
    mileage: "0 km",
    price: "60.000",
    location: "Warsaw - PL",
    image: volvoImg,
  },
  {
    model: "Tesla Model S",
    year: "2022/2022",
    mileage: "5.000 km",
    price: "100.000",
    location: "Oslo - NO",
    image: teslaImg,
  },
  {
    model: "BMW X3",
    year: "2024/2024",
    mileage: "500 km",
    price: "120.000",
    location: "Stockholm - SE",
    image: bmwImg,
  },
];

const MainSection = () => {
  return (
    <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 rounded-lg w-full max-w-7xl mx-auto justify-center items-center px-4">
      {MOCK_CARS.map((car) => (
        <div key={car.model} className="w-full bg-white rounded-lg shadow-md">
          <div className="relative w-full h-72 mb-2">
            <Image
              className="rounded-lg hover:scale-105 transition-all cursor-pointer"
              src={car.image}
              alt={`Image of ${car.model}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="font-bold mt-1 mb-2 px-2 text-center">{car.model}</p>

          <div className="flex flex-col px-2 text-center">
            <span className="text-zinc-700 mb-6">{car.year}</span>
            <strong className="text-black font-medium text-xl">
              {car.price}
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2 text-center">
            <span className="text-zinc-700">{car.location}</span>
          </div>
        </div>
      ))}
    </main>
  );
};

export default MainSection;
