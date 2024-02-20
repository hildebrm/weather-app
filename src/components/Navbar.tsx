import React from "react"; // Import React
import { CiLocationOn, CiSun } from "react-icons/ci";

type Props = {}; // Define the Props type

export default function Navbar({} : Props) { // Define the Navbar component
  return ( // Return the JSX
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
        <div className="h-[80px] w-full flex justify-between items-center 
        max-w-7x1 px-3 mx-auto">
            <p className="flex items-center justify-center gap-2">
                <h2 className="text-grey-500 text-3x1">Weather</h2>
                <CiSun className="text-3xl mt-1 text bg-yellow-300" />
            </p>

            <section className="flex gap-2 items-center">
              <CiLocationOn className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />

            </section>
        </div>
        Navbar
    </nav>
  );
}