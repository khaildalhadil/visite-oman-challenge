import { useTranslations } from "next-intl"

import SelectDropdown from "@/app/components/SelectDropdown";

export default function DestinationsPageHeader() {

  const t = useTranslations("DestinationsPage")
  const regions = t.raw("regions");
  const categorys = t.raw("filterCategories");
  /**
   * Filter by 
   *  category Filter 
   *  region Filter  ✔
   *  recommended season
   */
  return (
    <div className="flex justify-between items-center">

      <h1 className="text-2xl my-11 font-bold">
        {t("title")}
      </h1>

      <div className="flex gap-3">
        <SelectDropdown 
          selectName={t("filterByCategory")} 
          options={categorys} 
          filterKey="category"
          />
          
        <SelectDropdown 
          selectName={t("filterByRegion")} 
          options={regions} 
          filterKey="region"
          />


        {/* <button>{t("filterByRegion")}</button>
        <button>{t("filterBySeason")}</button> */}
      </div>

    </div>
  )
}