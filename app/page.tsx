import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
   
      <main className="flex min-h-screen flex-col bg-[#121212]">
       <h1> Portfolio website</h1>
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg text-gray-700">I'm [Your Name], a passionate developer!</p>
    </div>
       </main>
  )
}