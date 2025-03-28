"use client";
import SlideButton from "../../components/SlideButton"

export default function Home() {

  return (
    <div className="relative w-full h-screen bg-black">
      <div className="absolute inset-0 flex flex-col items-center text-center">
        <div className="relative">
          <video 
          playsInline autoPlay muted loop 
          className="w-full h-full inset-0"
          src="background.mp4"></video>
          <div className="absolute bg-gradient-to-l from-black to-transparent z-20"></div>
        </div>
        {/* <div>
          <img className="w-full h-screen" src="bg.jpg" alt="background" />
        </div> */}
        <div className="absolute bottom-1/12">
          <SlideButton />
        </div>
      </div>
    </div>
  );
}
