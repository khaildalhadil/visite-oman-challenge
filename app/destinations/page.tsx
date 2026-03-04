import PaginationControls from "../components/PaginationControls";
import Destinations from "./Destinations";

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
  
  const searchParam = await  searchParams;
  const allPlaces: Destination[] = await getPlaces();
  
  // default param
  const page = searchParam['page'] ?? '1';
  const per_page = searchParam['per_page'] ?? '8';

  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10
  const end = start + Number(per_page);// 5, 10, 15

  const enteries = allPlaces.slice(start, end)

    return (
    <div className="mt-10">
      <h1 className="text-2xl my-5 font-bold">
        All Destinations
      </h1>
      <Destinations listOfPlaces={enteries} />
      <PaginationControls hasNextPage={end < allPlaces.length} hasPrevPage={start > 0}  />
    </div>
  )
  
}