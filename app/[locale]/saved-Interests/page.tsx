import { getPlaces } from "@/app/lib/data";
import SavedInterests from "./SavedInterests"; 

export default async function page() {

  // get data in server side to pass it to client component
  const allPlaces: Destination[] = await getPlaces();

  return (
    
    <SavedInterests allPlaces={allPlaces} />
  )
}
