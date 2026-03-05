'use client'
import Image from "next/image";
import { useTranslations } from "use-intl";

type Locales = "en" | "ar";

// params من Next.js
interface PageParams {
  params: {
    locale: Locales;
  }
}

export default function Home({ params }: PageParams) {

  // const t = await getTranslations('HomePage');
  const t = useTranslations('HomePage')

  return (
    <div className="flex items-center justify-between gap-5 mt-20">

      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-5">
          {t("title")}
        </h1>
        <p className="text-lg">
          {t("description")}
        </p>
        <div>
        <button className="bg-green-600 text-white px-4 py-2 rounded mt-5 text-lg cursor-pointer">
          Start your journey
        </button>
        <button className="bg-gray-400 text-white px-4 py-2 rounded mt-5 ml-4 text-lg cursor-pointer">
          Learn More
        </button>

        <div className="flex items-center gap-20 ">
          <div className="flex items-center my-5 relative">
            <Image
              src="https://img.freepik.com/free-photo/happy-man-student-with-afro-hairdo-shows-white-teeth-being-good-mood-after-classes_273609-16608.jpg"
              alt="oman"
              width={40}
              height={40}
              className=" rounded-full h-10 w-10 object-cover"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
            />
            <Image
              src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_rp_progressive&w=740&q=80"
              alt="oman"
              width={40}
              height={40}
              className=" rounded-full h-10 w-10 object-cover absolute left-5"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
            />
            <Image
              src="https://img.freepik.com/free-photo/serious-young-african-man-standing-isolated_171337-9633.jpg?semt=ais_hybrid&w=740&q=80"
              alt="oman"
              width={40}
              height={40}
              className=" rounded-full h-10 w-10 object-cover absolute left-10"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
            />
            <Image
              src="https://img.freepik.com/photos-gratuite/smiley-bel-homme-posant_23-2148911841.jpg?semt=ais_hybrid&w=740&q=80"
              alt="oman"
              width={40}
              height={40}
              className=" rounded-full h-10 w-10 object-cover absolute left-15"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
            />
          </div>

          <p className="font-bold">{t("visitors")}</p>
        </div>

        </div>
      </div>

      <div className="flex-1 relative h-96 mt-16">
        <Image
          src="/images/hero_1.jpg"
          alt="oman"
          width={400}
          height={400}
          className="top-0 right-1/3 hero_ima z-10"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
        />
        <Image
          src="/images/hero_2.jpg"
          alt="oman"
          width={400}
          height={400}
          className="top-10 left-3/9 hero_ima"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
        />
        <Image
          src="/images/hero_3.jpg"
          alt="oman"
          width={400}
          height={400}
          className="hero_ima top-50 right-1/5"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
        />
      </div>

    </div>
  );
}