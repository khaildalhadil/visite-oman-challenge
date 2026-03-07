import { categoryMap, Per_Page, regionMap, seasonMap } from "@/app/lib/constantValues";
import PaginationControls from "../../components/PaginationControls";
import Destinations from "./Destinations";
import DestinationsPageHeader from "./DestinationsPageHeader";
import { Suspense } from "react";
import CardSkeleton from "@/app/components/CardSkeleton";
import {getPlaces} from "@/app/lib/data";

type props = {
  searchParams: Promise<{[keyof: string]: string | string[] | undefined}>
}

export default async function Page({searchParams}: props) {
  
  const searchParam = await searchParams;
  const allPlaces: Destination[] = await getPlaces();
  
  // filter region
  // let filterByRegion = allPlaces;
  const region: string = searchParam['region']?.toString() ?? 'all';

  const filterByRegion =
    region === "all" || region === "All" || region === "الكل"
      ? allPlaces
      : allPlaces.filter((place) => place.region.en === regionMap[region]);

  // let filterByRegionAndCategory = filterByRegion;
  const category: string = searchParam['category']?.toString() ?? 'all';

  const filterByRegionAndCategory =
    category === "all" || category === "All" || category === "الكل"
      ? filterByRegion
      : filterByRegion.filter((place) =>  
          place.categories.includes(categoryMap[category]),
        );

  const season: string = searchParam['season']?.toString() ?? 'all';
  

  const filterByRAndCAndSeason =
    season === "all" || season === "All" || season === "الكل"
      ? filterByRegionAndCategory
      : filterByRegionAndCategory.filter((place) =>
          place.recommended_months.includes(seasonMap[season]),
        );

  // default param
  const page = searchParam['page'] ?? '1';
  const per_page = searchParam['per_page'] ?? Per_Page;
  const start = (Number(page) - 1) * Number(per_page); // 0, 12, 24
  const end = start + Number(per_page);// 12, 24, 36
  const enteries = filterByRAndCAndSeason.slice(start, end)


    return (
    <Suspense fallback={<CardSkeleton />}>

      <div className="mt-10">
        <DestinationsPageHeader />
        {enteries.length > 0 ? 
          <>
            <Destinations listOfPlaces={enteries} />
            <PaginationControls 
              hasNextPage={end < filterByRAndCAndSeason.length} hasPrevPage={start > 0}  
              numberOfPages={Math.ceil(filterByRAndCAndSeason.length / Number(per_page))}
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