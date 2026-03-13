'use client'
import { useFavoriteStore } from "@/app/store/useFavoriteStore";
import Link from "next/link";
import Place from "../destinations/Place";
import { LiaTripadvisor } from "react-icons/lia";

export default function SavedInterests({allPlaces}: {allPlaces: Destination[]}) {

  const favorites = useFavoriteStore((state)=> state.favorites)
  const ids = new Set(favorites);
  const savedPlaces = allPlaces.filter(place => ids.has(place.id));

  function handelAddBtn(id: string) {
    // console.log(`add ${id}`);
  }

  if (!favorites.length) {
    return (
      <div className='my-10 flex flex-col items-center gap-3 justify-center text-lg'>
        <LiaTripadvisor className='text-5xl' />
        <h1 className='text-4xl'>Oops! </h1>
        <p>No Saved Interests</p>
        <Link className='border p-2 border-neutral-400 rounded' href={"/destinations"} >Add Interests Now</Link>
      </div>
      )
  }

  return (
    <section className="my-10">
      <h2 className="my-5 text-3xl">Saved Interests</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1fr_1fr_1fr_1fr] gap-5">
        {
          savedPlaces.map((place, i) =>
          <Place key={i} imageId={i} place={place} addToDay={true}
            handleAdd={()=> handelAddBtn(place.id)}
          />)
        }
      </ul> 
    </section>
  );
}
