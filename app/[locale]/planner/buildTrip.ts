
function buildTrip(favorites: Destination[], recommended: Destination[], tripDays: number) {

  const trip: Destination[] = [...favorites];

  for (const place of recommended) {

    if (trip.length >= tripDays) break;

    if (!trip.find(d => d.id === place.id)) {
      trip.push(place);
    }

  }

  return trip;
}