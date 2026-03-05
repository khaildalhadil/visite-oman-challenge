import Place from "./Place"

type Props = {
  listOfPlaces: Destination[],
  
}

export default function Destinations({listOfPlaces}: Props) {


  return (
    <ul className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-5">
      {listOfPlaces.map((place, i) =><Place key={i} imageId={i} place={place} />)}
    </ul>
  )
}