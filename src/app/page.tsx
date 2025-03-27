"use client";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-gray-800 text-white">
      {/* باکس محتوا */}
      <div className="absolute inset-0 flex flex-col items-center pt-5 justify-start text-center space-y-4">
        {/* لوگو */}
        <div>
          <img className="w-20" src="logo.png" alt="Watandar Logo" />
        </div>

        {/* عنوان رستوران */}
        <h1 className="text-[20px] font-bold">Restaurant Watandar</h1>
        <div>
          <Navbar />
        </div>
      </div>
    </div>
  );
}
