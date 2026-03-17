'use client'
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function Days({place}: {place: DayPlan}) {
  
  const t = useTranslations("days");
  const locale: string = useLocale() as LocaleType;

  return (
    <div>
      <h1 className="font-bold mt-5">Day {place.day}</h1>
      
      <div>
        <span className="text-orange-300 my-3 block">{t("time")}</span>
        <ul className="grid grid-cols-2 gap-5">
          {place.places.map((p, i)=> (
            <li key={i} className="flex items-center gap-3 border border-neutral-200 p-2">
              <Image
                // I use this url to make rnadom image 
                src={`https://picsum.photos/id/${10 + i}/1000/1300`}
                alt="place" 
                width={100}
                height={100}
                className="rounded"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
              />
              <div className="flex flex-col gap-2">
                <h2 className="font-bold">{p.place.name[locale as "en" | "ar"]}</h2>
                <p className="font-bold">{p.place.company[locale as "en" | "ar"]}</p>
                <p className="font-bold">{p.place.region[locale as "en" | "ar"]}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
