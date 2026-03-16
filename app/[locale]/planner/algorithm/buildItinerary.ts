type DayPlan = {
  day: number
  places: DestinationScore[]
}

export function buildItinerary(
  sorted?: DestinationScore[],
  regionDays?: RegionDays[],
  tripDays?: number,
  stopsPerDay: number = 3
): DayPlan[] | null {

  if (!sorted || !regionDays || !tripDays) return null;

  const result: DayPlan[] = [];
  let currentDay = 1;

  for (const region of regionDays) {
    const regionPlaces = sorted.filter(p => p.region === region.region);
    let regionDayCount = 0;

    for (let i = 0; i < regionPlaces.length && regionDayCount < region.days; i += stopsPerDay) {
      if (currentDay > tripDays) break;

      const places = regionPlaces.slice(i, i + stopsPerDay);

      result.push({
        day: currentDay,
        places
      });

      currentDay++;
      regionDayCount++;
    }
  }

  return result;
}