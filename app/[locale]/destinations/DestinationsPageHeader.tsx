'use client'

import { useTranslations } from "next-intl"
import SelectDropdown from "@/app/components/SelectDropdown";
import { useSearchParams } from "next/navigation";


export default function DestinationsPageHeader() {

  const params = useSearchParams();
  const category = params.get("category") ?? null;
  const region = params.get("region") ?? null;
  const season = params.get("season") ?? null;
  const sort = params.get("sort") ?? null;

  const t = useTranslations("DestinationsPage")
  const regions = t.raw("regions");
  const categorys = t.raw("filterCategories");
  const seasons = t.raw("recommendedSeasons");
  const sortBy = t.raw("sortBy");
  
  /**
   * Filter by 
   *  category Filter ✔ 
   *  region Filter  ✔
   *  recommended season ✔
   */
  return (
    <div className="flex flex-col mb-3 md:flex-row md:justify-between md:items-center">

      <h1 className="text-2xl my-11 font-bold">
        {t("title")}
      </h1>

      <div>
        <div className="flex gap-3">
          <SelectDropdown 
            selectName={category ?? t("filterByCategory")} 
            options={categorys} 
            filterKey="category"
            />
            
          <SelectDropdown 
            selectName={ region ?? t("filterByRegion")} 
            options={regions} 
            filterKey="region"
            />

        </div>
        
        <div className="flex justify-between mt-2">
          <SelectDropdown 
            selectName={season ?? t("filterRecommendedSeasons")} 
            options={seasons} 
            filterKey="season"
            />
          <SelectDropdown 
            selectName={sort ?? t("sort")} 
            options={sortBy} 
            filterKey="sort"
            />
        </div>
        
      </div>

    </div>
  )
}