import Image from "next/image"
import Link from "next/link"

// i should convert them from mb to kb to make them small size
const categories = [
  {name: "Culture", image: "Culture.jpg"},
  {name: "Food", image: "Food.jpg"},
  {name: "Beach", image: "Beach.jpg"},
  {name: "Nature", image: "Nature.jpg"},
  {name: "Mountain", image: "Mountain.jpg"},
  {name: "Desert", image: "Desert.jpg"},
]

export default function Categories() {
  return (
    <div className="border-t border-neutral-300 pt-10 ">
      <h1 className="text-2xl font-bold mb-10">
        Categories
      </h1>
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1fr_1fr_1fr] gap-5">
          {categories.map((c, i) => 
            <li key={i} className="relative">
              <Link href={`/destinations?page=1&per_page=20&region=all&season=all&category=${c.name}`}>
                <Image
                  src={`/images/${c.image}`}
                  alt="oman"
                  width={100}
                  height={100}
                  className="w-full h-full rounded"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+"
                />
                <p className=" absolute bottom-0 left-1/2 -translate-x-1/2 font-bold text-white text-2xl backdrop-blur-2xl w-full text-center ">{c.name}</p>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
