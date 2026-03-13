
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { LiaTripadvisor } from "react-icons/lia";
// import getDestinationByIds from "./getDestinationByIds";
// import getDestinationsByIds from "./getDestinationByIds";
import { useFavoriteStore } from "@/app/store/useFavoriteStore";
import calculateDestinationScore, { sortAndTopDestinations } from "./algorithm/scoreDestination";
import { allocateRegions } from "./allocateRegions";
import { buildItinerary } from "./algorithm/buildItinerary";
import Days from "./Days";

export default function AllPlan({allPlaces}: {allPlaces: Destination[]}) {

  // userPrefs interests
  const [userformInterests, setUserformInterests] = useState<FavoriteDestinations>();
  const [destinationCategories, setDestinationCategories] = useState<Destination[]>();

  const favorites = useFavoriteStore((state)=> state.favorites)
  const ids = new Set(favorites);
  const savedPlaces = allPlaces.filter(place => ids.has(place.id));
  
  const result = calculateDestinationScore(userformInterests, savedPlaces);
  const allocateRegionsSorted = sortAndTopDestinations(result, userformInterests)
  const data = allocateRegions(allocateRegionsSorted, userformInterests?.tripDays);

  const itinerary = buildItinerary(
    allocateRegionsSorted,
    data,
    userformInterests?.tripDays,
    userformInterests?.intensity
  )
  
  
  useEffect(() => {

    async function getDataFromLocalStro(){
      if (typeof window !== 'undefined') {
        const allTripsString = localStorage.getItem("tripPreferences");
        if (allTripsString) {
          setUserformInterests(JSON.parse(allTripsString));
        }
      }
    }
    getDataFromLocalStro();
  }, []);

if (!userformInterests) {
    return (
      <div className="my-10 flex flex-col items-center gap-3 justify-center text-lg">
        <LiaTripadvisor className="text-5xl" />
        <h1 className="text-4xl">Oops! </h1>
        <p>No Trip Found</p>
        <Link
          className="border p-2 border-neutral-400 rounded"
          href={"/planner/upsert-tip"}
        >
          Add Trip Now
        </Link>
      </div>
    );
  }

  if (!itinerary) return <div>Something went wrong</div>
  return (
    <div>
      <div className="flex items-center justify-between mt-10">
        <h1 className="font-bold text-2xl">Places To Visit</h1>
        <div className="flex flex-col gap-3">
          <Link href={"/planner/upsert-tip"} className="bg-green-600 text-green-50 p-2 rounded cursor-pointer">Edit Your Trip</Link>
          <button className="bg-red-600 text-red-100 p-2 rounded cursor-pointer">Delete This Tip</button>

        </div>
      </div>
      {itinerary.map((place, i) => (
        <Days key={i} place={place} />
      ))}
    </div>
  );
}
