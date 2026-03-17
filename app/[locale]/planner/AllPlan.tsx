'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { LiaTripadvisor } from "react-icons/lia";
import { useFavoriteStore } from "@/app/store/useFavoriteStore";
import calculateDestinationScore, { sortAndTopDestinations } from "./algorithm/scoreDestination";
import { allocateRegions } from "./allocateRegions";
import { buildItinerary } from "./algorithm/buildItinerary";
import Days from "./Days";
import Modal from "../../components/Modal";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { allocateDaysToRegions } from "./algorithm/allocateDaystoRegions";
import Map from "@/app/components/Map";

export default function AllPlan({allPlaces}: {allPlaces: Destination[]}) {

  const [userformInterests, setUserformInterests] = useState<FavoriteDestinations>();
  const [isModalOpenToDelete, setIsModalOpenToDelete] = useState<boolean>(false);

  // GET favorite destinations (IDs) from local storage by zustned
  const favorites = useFavoriteStore((state)=> state.favorites)
  // my it from array to set to use has a and this make it O(1) in time compli
  const ids = new Set(favorites);
  // gate all favorites place 
  const userFavoritesPlaces = allPlaces.filter(place => ids.has(place.id));
  
  // give each favorite destination score prop ✔ 
  const result = calculateDestinationScore(userformInterests, userFavoritesPlaces);
  
  // sort and get only top this call Greedy ✔
  const allocateRegionsSorted = sortAndTopDestinations(result, userformInterests)
  
  // get regions and give them avg score and sort them ✔
  const groupByRegion = allocateRegions(allocateRegionsSorted, userformInterests?.tripDays);
  

  // how many days for each region
  const daysToRegions = allocateDaysToRegions(
    groupByRegion,
    userformInterests?.tripDays
  )

  const itinerary = buildItinerary(
    allocateRegionsSorted,
    daysToRegions,
    userformInterests?.tripDays,
    userformInterests?.intensity == "relaxed" ? 3
      : userformInterests?.intensity == "balanced" ? 4
      : userformInterests?.intensity == "packed" ? 5
      : 0
  )

  const t = useTranslations("planner")
  
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
  }, [isModalOpenToDelete, setIsModalOpenToDelete]);

  function handleDeleteTrip() {
    localStorage.removeItem("tripPreferences");
    setIsModalOpenToDelete(false);
    setUserformInterests(undefined)
    toast.success("Trip deleted Successfully")
  }

  if (!userformInterests) {
    return (
      <div className="my-10 flex flex-col items-center gap-3 justify-center text-lg">
        <LiaTripadvisor className="text-5xl" />
        <h1 className="text-4xl">{t("oops")}</h1>
        <p>{t("noTrip")}</p>
        <Link
          className="border p-2 border-neutral-400 rounded bg-green-700 text-green-100 cursor-pointer"
          href={"/planner/upsert-tip"}
        >
          {t("btn")}
        </Link>
      </div>
    );
  }

  if (!itinerary) return <div>Something went wrong</div>
  const locations = [
    { id: 1, name: "Place 1", lat: 23.3880, lng: 58.3829 },
    { id: 2, name: "Place 2", lat: 23.6000, lng: 58.4000 },
    { id: 3, name: "Place 3", lat: 23.5700, lng: 58.3600 },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mt-10">
        <h1 className="font-bold text-2xl">{t("header")}</h1>
        <div className="flex flex-col gap-3">
          <Link
            href={"/planner/upsert-tip"}
            className="bg-green-600 text-green-50 p-2 rounded cursor-pointer"
          >
            {t("btnEdit")}
          </Link>

          <button
            className="bg-red-600 text-red-100 p-2 rounded cursor-pointer"
            onClick={() => setIsModalOpenToDelete(true)}
          >
            {t("btnDelete")}
          </button>
        </div>
      </div>
      {isModalOpenToDelete && (
        <Modal setIsOpen={setIsModalOpenToDelete}>
          <p className="p-3 text-2xl font-bold">{t("deleteMessage")}</p>
          <button
            className="bg-red-600 w-fit mb-10 px-2 py-1 text-red-50 cursor-pointer rounded "
            onClick={handleDeleteTrip}
          >
            {t("d")}
          </button>
        </Modal>
      )}

        <div className=" mx-auto my-5 w-[98%] h-120">
          {/* map */}
          <Map locations={locations} zoom={10}  />
        </div>

        <div>
          {itinerary.map((place, i) => (
            <Days key={i} place={place} />
          ))}
        </div>

    </div>
  );
}
