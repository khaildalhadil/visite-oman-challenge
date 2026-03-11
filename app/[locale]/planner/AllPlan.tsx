
'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { LiaTripadvisor } from "react-icons/lia";
import { jaccardSimilarity } from "./algorithm/jaccard";
import { seasonFit } from "./algorithm/seasonFit";
import getDestinationByIds from "./getDestinationByIds";
import getDestinationsByIds from "./getDestinationByIds";
import { useFavoriteStore } from "@/app/store/useFavoriteStore";
import normalize from "./algorithm/normalize";
import { categories } from "./add-trip/PlanTripForm";

export default function AllPlan({allPlaces}: {allPlaces: Destination[]}) {

  // userPrefs interests
  const [userPrefsInterests, setUserPrefsInterests] = useState<RavoriteDestinations>();
  const [destinationCategories, setDestinationCategories] = useState<Destination[]>();

  const favorites = useFavoriteStore((state)=> state.favorites)
  const ids = new Set(favorites);
  const savedPlaces = allPlaces.filter(place => ids.has(place.id));
  const userCategories = savedPlaces.flatMap(place => place.categories);
  
  useEffect(() => {

    async function getDataFromLocalStro(){
      if (typeof window !== 'undefined') {
        const allTripsString = localStorage.getItem("tripPreferences");
        if (allTripsString) {
          setUserPrefsInterests(JSON.parse(allTripsString));
        }
      }
    }
    getDataFromLocalStro();
  }, []);


  const interestScore = jaccardSimilarity(
    userCategories,
    categories
  );

  console.log(interestScore);

  // const seasonScore = seasonFit(
  //   userPrefs.travelMonth,
  //   destination.recommended_months
  // );

  // const crowdScore = normalize(
  //   destination.crowd_level,
  //   1,
  //   5
  // );

  // const costScore = normalize(
  //   destination.ticket_cost_omr,
  //   0,
  //   20
  // );
  
  if (!userPrefsInterests) {
    return (
      <div className="my-10 flex flex-col items-center gap-3 justify-center text-lg">
        <LiaTripadvisor className="text-5xl" />
        <h1 className="text-4xl">Oops! </h1>
        <p>No Trip Found</p>
        <Link
          className="border p-2 border-neutral-400 rounded"
          href={"/planner/add-trip"}
        >
          Add Trip Now
        </Link>
      </div>
    );
  }


  return (
    <div>
      <p>{userPrefsInterests?.travelMonth}</p>
      <p>{destinationCategories?.length}</p>
    </div>
  )
}
