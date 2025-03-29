"use client";
import SlideButton from "../../components/SlideButton"

export default function Home() {

  return (
    <div className="relative w-full h-screen">
      <div className="">
        <img className="w-full h-screen" src="background.png" alt="" />
        <img className="absolute top-5/12 left-1/2 w-10/12 transform -translate-x-1/2 -translate-y-1/2" src="main-bg.png" alt="" />

        <div className="absolute top-10/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <SlideButton />
        </div>
      </div>
    </div>
  );
}
