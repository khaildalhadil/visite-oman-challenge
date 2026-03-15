'use clint'

import Map from "@/app/components/Map";
import SingleCardSkeleto from "@/app/components/SingleCardSkeleto";
import { LatLngExpression } from "leaflet";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";
import { CiWifiOn } from "react-icons/ci";
import { FaCloudShowersHeavy, FaRunning } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { GiFlyingFox, GiSherlockHolmes } from "react-icons/gi";
import { IoIosWalk } from "react-icons/io";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

export default function DestinatoinMoreDetails({destination}: {destination: Destination}) {

  const [focus, setFocus] = useState<string>("Overview")

  const searchParams = useParams();
  const locale = searchParams.locale ?? "en";
  const placeName = destination.name[locale as "en" | "ar"];
  const cost = destination.ticket_cost_omr;
  const position: LatLngExpression = [destination.lat, destination.lng];
  const time = destination.avg_visit_duration_minutes;

  const t = useTranslations("DestinationMoreDetails");

  return (
    <div className="my-10 border-neutral-200 pb-3">
      <ul className="flex justify-between border-b-4 pb-2 border-gray-100">
        <li
          onClick={() => setFocus("Overview")}
          className={`relative ${focus == "Overview" ? "focusLink text-neutral-800" : "text-neutral-400"} cursor-pointer`}
        >
          {t("Overview")}
        </li>
        <li
          onClick={() => setFocus("Location")}
          className={`relative ${focus == "Location" ? "focusLink text-neutral-800" : "text-neutral-400"} cursor-pointer`}
        >
          {t("Location")}
        </li>
        <li
          onClick={() => setFocus("included")}
          className={`relative ${focus == "included" ? "focusLink text-neutral-800" : "text-neutral-400"} cursor-pointer`}
        >
          {t("Include")}
        </li>
        <li
          onClick={() => setFocus("Reviews")}
          className={`relative ${focus == "Reviews" ? "focusLink text-neutral-800" : "text-neutral-400"} cursor-pointer`}
        >
          {t("Reviews")}
        </li>
      </ul>

      {/* I shluld but it in component Overview */}
      {focus == "Overview" && (
        <div className="mt-10 flex flex-col gap-5">
          <div className="flex gap-15">
            <div className="flex-3">
              <div>
                <h2 className=" text-2xl font-bold mb-2">
                  {t("About")} {placeName}
                </h2>
                {t("description", {
                  placeName,
                  // region: locale,
                  company: destination.company.en,
                  category: destination.categories[0],
                  time: time > 60 ? `${time / 60} hours` : `${time} min`,
                  price: destination.ticket_cost_omr,
                  months: destination.recommended_months.join(", "),
                  crowd: destination.crowd_level,
                })}
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold ">Our Best Facilities</h2>
                <ul className="grid grid-cols-3 grid-rows-3 gap-5 mt-2">
                  {/* I shuld be dry here */}
                  <li className="flex items-center gap-2">
                    <CiWifiOn className="bg-neutral-100 p-1 text-3xl rounded-full" />
                    <span>WIFI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPersonSwimming className="bg-neutral-100 p-1 text-3xl rounded-full" />
                    <span>Swimming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoIosWalk className="bg-neutral-100 p-1 text-3xl rounded-full" />
                    <span>Walk</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRunning className="bg-neutral-100 p-1 text-3xl rounded-full" />
                    <span>Running</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <GiFlyingFox className="bg-neutral-100 p-1 text-3xl rounded-full" />
                    <span>Flying Fox</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MdAirlineSeatReclineExtra className="bg-neutral-100 p-1 text-3xl rounded-full" />
                    <span>Seat Recline Extra</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <GiSherlockHolmes className="bg-neutral-100 p-1 text-3xl rounded-full" />
                    <span>Holmes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCloudShowersHeavy className="bg-neutral-100 p-1 text-3xl rounded-full" />
                    <span>Cloud Showers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-neutral-100 flex-1 p-2 h-fit shadow">
              <p className="font-bold text-2xl">
                {cost == 0 ? t("Free") : `${t("Cost")} ${cost}`}
              </p>
              <button
                disabled
                className="bg-green-700 text-green-50 w-full block rounded-full p-2 text-lg cursor-pointer mt-10"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* map */}

          <div className=" mx-auto my-5 w-[98%] h-120">
            <h2 className=" text-2xl font-bold mb-2">Locatoin</h2>
            <Map zoom={15} posix={position} name={placeName} />
          </div>
        </div>
      )}

      {/* {"Location"} */}

      {focus == "Location" && (
        <div className="m-20">
          <SingleCardSkeleto />
          <SingleCardSkeleto />
          <SingleCardSkeleto />
        </div>
      )}

      {focus == "included" && (
        <div className="m-20 grid grid-cols-3 grid-rows-3 gap-10">
          <SingleCardSkeleto />
          <SingleCardSkeleto />
          <SingleCardSkeleto />
        </div>
      )}

      {focus == "Reviews" && (
        <div className="m-20 grid grid-cols-2 grid-rows-2 gap-10">
          <SingleCardSkeleto />
          <SingleCardSkeleto />
          <SingleCardSkeleto />
        </div>
      )}
    </div>
  );
}
