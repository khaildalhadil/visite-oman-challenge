'use client'

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Place({place, imageId}: {place: Destination, imageId: number}) {

  const crowd = place.crowd_level;
  const [isBooked, setIsBooked] = useState(false)

  const crowdColor = {
    1: "bg-green-100 text-green-700",
    2: "bg-green-200 text-green-800",
    3: "bg-yellow-100 text-yellow-700",
    4: "bg-orange-100 text-orange-700",
    5: "bg-red-300 text-red-800",
  };

  const crowdText = {
    1: "Very Calm",
    2: "Calm",
    3: "Moderate",
    4: "Busy",
    5: "Very Busy",
  };

  return (
    <li className="flex flex-col relative transition duration-400 hover:-translate-y-2 ">
      <button 
        onClick={()=> setIsBooked((booked)=>!booked)}
        className="absolute top-0 right-0 m-3 cursor-pointer bg-gray-300/50 p-2 rounded-full text-red-600 text-2xl">
          {isBooked ? <FaHeart /> : <FaRegHeart />}
      </button>

      <Image
        src={`https://picsum.photos/id/${imageId+10}/1000/1300`}
        alt="place" 
        width={400}
        height={400}
        className="rounded-2xl"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
        />

      <div className="p-2 absolute bottom-0 backdrop-blur-lg bg-gray-600/50 text-gray-50  rounded-b-2xl">
        <div className="flex justify-between">
          <h3 className="font-bold">{place.name.en}</h3>
          <p className="bg-gray-400/30 px-2 rounded-full">m {place.avg_visit_duration_minutes}</p>
        </div>
        <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, error.</p>

        <div className="flex gap-3 py-1 text-sm mb-2">
          <span className="bg-gray-400/30 px-2 rounded-full">{place.region.en}</span>
          <span
            className={`${crowdColor[crowd]} bg-gray-400/30 px-2 rounded-full `}
          >{crowdText[crowd]}</span>
        </div>

        <div className="">
          <Link href={""} className="bg-white my-1 font- block w-full text-gray-900 text-center p-2 rounded-3xl">See More</Link>
        </div>
      </div>
    </li>
  )
}