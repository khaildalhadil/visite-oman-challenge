import { getPlaces } from "@/app/lib/data";
import DestinationDetils from "./DestinationDetils";

export default async function page({ params }: { params: Promise<{ desId: string }> }) {

  const {desId} = await params;

  // Fetch the destination data using the desId but we don't have an API so I will use the data that we have
  // https://raw.githubusercontent.com/rihal-om/rihal-codestacker/refs/heads/main/FE/data.json?id={desId}

  const allPlaces: Destination[] = await getPlaces();
  const destination = allPlaces.find(place => place.id === desId);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div>
      <DestinationDetils destination={destination} />
    </div>
  );
}
