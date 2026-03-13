type RegionScore = {
  region: string
  score: number
}

export function buildItinerary(
  sorted?: DestinationScore[],
  regions?: RegionScore[],
  tripDays?: number,
  intensity?: "relaxed" | "balanced" | "intense"
): DayPlan[] | null {

  if (!sorted || !regions || !tripDays || !intensity) return null;

  const stopsPerDay = {
    relaxed: 2,
    balanced: 3,
    intense: 4
  }

  const result: DayPlan[] = []

  let currentDay = 1

  for (const region of regions) {

    if (currentDay > tripDays) break

    const regionPlaces = sorted.filter(
      place => place.region === region.region
    )

    for (let i = 0; i < regionPlaces.length; i += stopsPerDay[intensity]) {

      if (currentDay > tripDays) break

      const places = regionPlaces.slice(
        i,
        i + stopsPerDay[intensity]
      )

      result.push({
        day: currentDay,
        places
      })

      currentDay++
    }
  }

  return result
}