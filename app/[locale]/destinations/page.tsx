import { Per_Page } from "@/app/lib/constantValues";
import PaginationControls from "../../components/PaginationControls";
import Destinations from "./Destinations";
import DestinationsPageHeader from "./DestinationsPageHeader";
import { Suspense } from "react";
import CardSkeleton from "@/app/components/CardSkeleton";

type props = {
  searchParams: Promise<{[keyof: string]: string | string[] | undefined}>
}

async function getPlaces() {

  const res = await fetch("https://raw.githubusercontent.com/rihal-om/rihal-codestacker/refs/heads/main/FE/data.json"); 
  if (!res.ok) {
    return new Response("Error fetching data", {status: 500})
  }
  return res.json();
}


export default async function Page({searchParams}: props) {
  
  const searchParam = await searchParams;
  const allPlaces: Destination[] = await getPlaces();
  
  // filter region
  let filterByRegion = allPlaces;
  const region = searchParam['region'] ?? 'all';
  if (region == "All" || region == "الكل") filterByRegion = allPlaces;
  else if (region == "Muscat" || region == "مسقط") filterByRegion = allPlaces.filter(place => place.region.en === "Muscat");
  else if (region == "Batinah" || region == "الباطنة") filterByRegion = allPlaces.filter(place => place.region.en === "Batinah");
  else if (region == "Dhofar" || region == "ظفار") filterByRegion = allPlaces.filter(place => place.region.en === "Dhofar");
  else if (region == "Dhahira" || region == "الظاهرة") filterByRegion = allPlaces.filter(place => place.region.en === "Dhahira");
  else if (region == "Dakhiliya" || region == "الداخلية") filterByRegion = allPlaces.filter(place => place.region.en === "Dakhiliya");
  else if (region == "Sharqiya" || region == "الشرقية") filterByRegion = allPlaces.filter(place => place.region.en === "Sharqiya");

  let filterByRegionAndCategory = filterByRegion;
  const category = searchParam['category'] ?? 'all';
  if (category == "All" || category == "الكل") filterByRegionAndCategory = filterByRegion;
  else if (category == "Culture" || category == "الثقافة") filterByRegionAndCategory = filterByRegion.filter(place => place.categories.includes("culture"))
  else if (category == "Food" || category == "الطعام") filterByRegionAndCategory = filterByRegion.filter(place => place.categories.includes("food"))
  else if (category == "Nature" || category == "الطبيعة") filterByRegionAndCategory = filterByRegion.filter(place => place.categories.includes("nature"))
  else if (category == "Adventure" || category == "المغامرة" ) filterByRegionAndCategory = filterByRegion.filter(place => place.categories.includes("adventure"))
  else if (category == "Beach" || category == "الشاطئ" ) filterByRegionAndCategory = filterByRegion.filter(place => place.categories.includes("beach"))
  else if (category == "Mountain" || category == "الجبل" ) filterByRegionAndCategory = filterByRegion.filter(place => place.categories.includes("mountain"))
  else if (category == "Desert" || category == "الصحراء" ) filterByRegionAndCategory = filterByRegion.filter(place => place.categories.includes("desert"))

  // default param
  const page = searchParam['page'] ?? '1';
  const per_page = searchParam['per_page'] ?? Per_Page;
  const start = (Number(page) - 1) * Number(per_page); // 0, 12, 24
  const end = start + Number(per_page);// 12, 24, 36
  const enteries = filterByRegionAndCategory.slice(start, end)

    return (
    <Suspense fallback={<CardSkeleton />}>

      <div className="mt-10">
        <DestinationsPageHeader />
        {enteries.length > 0 ? 
          <>
            <Destinations listOfPlaces={enteries} />
            <PaginationControls 
              hasNextPage={end < filterByRegionAndCategory.length} hasPrevPage={start > 0}  
              numberOfPages={Math.ceil(filterByRegionAndCategory.length / Number(per_page))}
              />
          </>
            :<div className="flex justify-center my-30">
              <h1 className="font-bold text-4xl " >Not Place Found With This Filter</h1>
            </div>
        }
      </div>
    </Suspense>
  )
  
}