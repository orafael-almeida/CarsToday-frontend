import logoImg from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";

export function Header() {
  return (
    <div className="w-full absolute flex items-center justify-center h-16 bg-white drop-shadow mb-4">
      <header className="flex w-full max-w-7xl items-center justify-between px-4 mx-auto">
        <Link href="/">
          <Image src={logoImg} alt="Logo do site" />
        </Link>

        <Link href="/">
          <div className="border-2 rounded-full p-1 border-gray-900">
            <FiUser size={22} className="text-black" />
          </div>
        </Link>
      </header>
    </div>


  );
}
