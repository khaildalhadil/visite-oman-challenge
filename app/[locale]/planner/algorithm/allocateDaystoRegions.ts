type RegionDays = {
  region: string
  days: number
}

export function allocateDaysToRegions(
  regions: RegionScore[] | undefined,
  tripDays: number | undefined
): RegionDays[] | undefined {
  if (!regions || !tripDays) return undefined;

  // Create a daily matrix for each region
  const result: RegionDays[] = regions.map(r => ({
    region: r.region,
    days: 0
  }));

  const maxDaysPerRegion = Math.ceil(tripDays / 2);
  let remainingDays = tripDays;
  let i = 0;

  // Distribute in a circular fashion until all days are consumed
  while (remainingDays > 0) {
    const region = result[i % result.length];

    if (region.days < maxDaysPerRegion) {
      region.days++;
      remainingDays--;
    }

    i++;
  }

  return result;
}