import { getPlaces } from "@/app/lib/data";
import SavedInterests from "./SavedInterests"; 

export default async function page() {

  const allPlaces: Destination[] = await getPlaces();


  return (
    
    <SavedInterests allPlaces={allPlaces} />
  )
}
