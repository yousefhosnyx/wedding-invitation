"use client";

import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-04-04T19:00:00"); // Replace with your wedding date
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft("The Big Day is Here!");
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Google Maps link (use your specific location URL)
  const locationUrl =
    "https://www.google.com/maps?q=12+Nile+Corniche,+Maadi,+Cairo+Governorate,+Egypt";

  return (
    <div
      className=" min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('./x.webp')" }}
    >
      <div className=" animate-fadeIn flex flex-col min-h-screen  items-center justify-center text-center py-12 px-4 bg-black bg-opacity-40">
        {/* Welcome Message */}
        <p className=" text-xl md:text-3xl text-yellow-400 font-semibold animate__animated animate__fadeIn animate__delay-1s">
          Welcome to the Wedding of
        </p>

        {/* Names */}
        <h1 className=" text-4xl md:text-6xl font-bold text-white mt-4 animate__animated animate__bounceIn animate__delay-1s">
          Yousef & Nancy
        </h1>

        {/* Date and Time */}
        <p className="mt-6 text-xl md:text-3xl text-white animate__animated animate__fadeIn animate__delay-2s">
          Friday, 4 April 2025
        </p>
        <p className="text-lg md:text-2xl text-white animate__animated animate__fadeIn animate__delay-2s">
          7:00 PM
        </p>

        {/* Location */}
        <p className="mt-4 text-lg md:text-xl text-white animate__animated animate__fadeIn animate__delay-2s">
          Nile Corniche, Maadi, Lana Hall
        </p>

        {/* Countdown Timer */}
        <div className="mt-5 flex justify-center h-[50px] items-center text-2xl md:text-3xl font-bold text-yellow-400">
          {timeLeft ? (
            timeLeft
          ) : (
            <InfinitySpin
              visible={true}
              width="200"
              color="#facc15"
              ariaLabel="infinity-spin-loading"
            />
          )}
        </div>

        {/* Location Button (direct link to Google Maps) */}
        <a
          href={locationUrl}
          target="_blank" // Opens Google Maps in a new tab
          className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-3 md:py-3 md:px-6 rounded-lg shadow-lg transition ease-in-out transform hover:scale-105 animate__animated animate__pulse animate__delay-3s"
        >
          See Location
        </a>
      </div>
    </div>
  );
}
