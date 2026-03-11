'use client'

import { CrowdColor } from "@/app/lib/constantValues";
import { useFavoriteStore } from "@/app/store/useFavoriteStore";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Place({place, imageId, addToDay, handleAdd}: {
    place: Destination, imageId: number,addToDay?: boolean, handleAdd?: ()=> void;
  }) {

  const toggleFavorite = useFavoriteStore(state=> state.toggleFavorite)
  const favorites = useFavoriteStore(state=> state.favorites)
  
  const locale: string = useLocale() as LocaleType;

  const crowd = place.crowd_level;
  const min = place.avg_visit_duration_minutes;
  const cost = place.ticket_cost_omr
  
  const placeName = place.name[locale as "en" | "ar"];
  const placeLocation = place.region[locale as "en" | "ar"];

  const t = useTranslations("DestinationsPage");
  const crowdState = t(`crowdLevels.${crowd}`);

  return (
    <li className="flex flex-col relative transition duration-400 hover:-translate-y-2 w-full">
      <button 
        onClick={()=> toggleFavorite(place.id)}
        className="absolute top-0 right-0 m-3 cursor-pointer bg-gray-300/50 p-2 rounded-full text-red-600 text-2xl">
          {favorites.includes(place.id) ? <FaHeart /> : <FaRegHeart />}
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

      <div className="p-2 absolute bottom-0 backdrop-blur-lg bg-gray-600/50 text-gray-50 w-full  rounded-b-2xl">
        <div className="flex justify-between">
          <h3 className="font-bold">{placeName}</h3>
          <p className="bg-gray-400/30 px-2 rounded-full">
            {min >= 60 ? 
              `h ${min / 60}`
              : `m ${min}`}</p>
        </div>
        <p className="">{t("description")}</p>

        <div className="">
          <div className="flex gap-3 py-1 text-sm mb-2">
            <span className="bg-gray-400/30 px-2 rounded-full">{placeLocation}</span>
            <span
              className={`${CrowdColor[crowd]} bg-gray-400/30 px-2 rounded-full `}
            >{crowdState}</span>
          </div>
          <div className="mb-2 flex gap-2">
            {place.categories.map((category, index) => (
              <span key={index} className="bg-gray-400/30 px-2 rounded-full">{
                t(`categories.${category}`)
                }</span>
            ))}

            <span className="bg-gray-400/30 px-2 rounded-full">
                {cost} 
                <span> Rial</span>
              </span>
          </div>
          <span></span>
        </div>

        <div className="">
          <Link href={`/destinations/${place.id}`} className="bg-white my-1 font- block w-full text-gray-900 text-center p-2 rounded-3xl hover:bg-neutral-100 ">{t("seeMore")}</Link>
          {addToDay && <button onClick={handleAdd} className="bg-white my-1 font- block w-full text-gray-900 text-center p-2 rounded-3xl hover:bg-neutral-100  cursor-pointer">+ Add to Day</button>}
        </div>
      </div>
    </li>
  )
}