"use client";

import { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";
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
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0");
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0");
        const minutes = Math.floor((difference / (1000 * 60)) % 60)
          .toString()
          .padStart(2, "0");
        const seconds = Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0");

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
      <div className="flex gap-[4px] md:gap-[5px] justify-center items-center h-[50px]">
        <p className="text-xl md:text-3xl ">Just</p>
        <div className="  text-xl md:text-3xl font-bold text-mainColor">
          {timeLeft ? (
            timeLeft
          ) : (
            // <InfinitySpin
            //   visible={true}
            //   width="200"
            //   color="#10C48A"
            //   ariaLabel="infinity-spin-loading"
            // />
            <div className=" w-[159px] md:w-[238.5px] flex justify-center ">
              {" "}
              <ClockLoader size={30} color="#10c48a" />{" "}
            </div>
          )}
        </div>
        <p className="text-xl md:text-3xl ">Left.</p>
      </div>

      {/* Location Button (direct link to Google Maps) */}
      <div className="flex gap-3">
        {" "}
        <a
          href={locationUrl}
          target="_blank" // Opens Google Maps in a new tab
          className="mt-5 bg-mainColor hover:bg-shadeColor text-gray-900 font-medium py-2 px-2 md:py-3 md:px-6 rounded-lg shadow-lg transition ease-in-out transform hover:scale-105"
        >
          Location
        </a>
        <a
          href="/wedding-invitation.jpg"
          download="Wedding_Invitation.jpg"
          target="_blank" // Opens Google Maps in a new tab
          className="mt-5 bg-mainColor hover:bg-shadeColor text-gray-900 font-medium py-2 px-2 md:py-3 md:px-6 rounded-lg shadow-lg transition ease-in-out transform hover:scale-105"
        >
          Invitiation
        </a>
      </div>
    </div>
  );
}
