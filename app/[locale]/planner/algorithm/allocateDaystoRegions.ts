type RegionDays = {
  region: string
  days: number
}

export function allocateDaysToRegions(
  regions: RegionScore[] | undefined,
  tripDays: number | undefined
): RegionDays[] | undefined {
  if (!regions || !tripDays) return undefined;

  // إنشاء مصفوفة باليوم لكل منطقة
  const result: RegionDays[] = regions.map(r => ({
    region: r.region,
    days: 0
  }));

  const maxDaysPerRegion = Math.ceil(tripDays / 2);
  let remainingDays = tripDays;
  let i = 0;

  // التوزيع بشكل دائري حتى استهلاك كل الأيام
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