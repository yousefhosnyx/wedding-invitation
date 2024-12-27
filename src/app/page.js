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
    <div className="animate-fadeIn min-h-screen bg-background flex flex-col items-center justify-center text-center py-12 px-4">
      {/* Countdown Timer */}
      <div className="flex gap-[5px] justify-center items-center h-[50px]">
        <p className="text-2xl md:text-3xl ">Just</p>
        <div className=" items-center text-2xl md:text-3xl font-bold text-yellow-400 min-w-[180px] max-w-[180px] md:min-w-[222px] md:max-w-[222px] flex justify-center">
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
        <p className="text-2xl md:text-3xl ">Left.</p>
      </div>

      {/* Location Button (direct link to Google Maps) */}
      <div className="flex gap-2">
        {" "}
        <a
          href={locationUrl}
          target="_blank" // Opens Google Maps in a new tab
          className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-3 md:py-3 md:px-6 rounded-lg shadow-lg transition ease-in-out transform hover:scale-105"
        >
          Location
        </a>
        <a
          href="/wedding-invitation.jpg"
          download="Wedding_Invitation.jpg"
          target="_blank" // Opens Google Maps in a new tab
          className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-3 md:py-3 md:px-6 rounded-lg shadow-lg transition ease-in-out transform hover:scale-105"
        >
          Invitiation
        </a>
      </div>
    </div>
  );
}
