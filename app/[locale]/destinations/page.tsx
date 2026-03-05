import PaginationControls from "../../components/PaginationControls";
import Destinations from "./Destinations";
import DestinationsPageHeader from "./DestinationsPageHeader";

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
  const per_page = searchParam['per_page'] ?? '12';

  const start = (Number(page) - 1) * Number(per_page); // 0, 12, 24
  const end = start + Number(per_page);// 12, 24, 36

  const enteries = allPlaces.slice(start, end)



    return (
    <div className="mt-10">
      <DestinationsPageHeader />
      <Destinations listOfPlaces={enteries} />
      <PaginationControls hasNextPage={end < allPlaces.length} hasPrevPage={start > 0}  />
    </div>
  )
  
}