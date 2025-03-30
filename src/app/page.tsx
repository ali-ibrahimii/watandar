"use client";
import SlideButton from "../../components/SlideButton";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <video className="w-full h-screen object-cover" src="background.mp4" loop muted autoPlay playsInline></video>
      <div className="absolute top-11/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SlideButton />
      </div>
    </div>
  );
}
