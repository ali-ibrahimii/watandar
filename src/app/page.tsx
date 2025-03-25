"use client"

export default function Home() {

  return (
    <div className="relative w-screen h-screen border">
     <video
        muted autoPlay playsInline loop
        src="/background.mp4" 
        className="absolute inset-0 top-0 left-0 object-cover w-full h-full"
        >
      </video>

      <div className="absolute bottom-8 left-1/2 z-10 border text-white transform -translate-x-1/2">
        <h1>Restaurant Watandar</h1>
        <p>The most fames restaurant in mashhad</p>
        <button
          className="text-md font-bold bg-amber-700 px-4 p-1 rounded-full hover:bg-white/50"
        >Menu</button>
      </div>
    </div>
  );
}
