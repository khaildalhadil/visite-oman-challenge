

export function allocateRegions(
  destinations: DestinationScore[] | undefined,
  tripDays: number| undefined
): RegionScore[] | undefined {

  if (!destinations || !tripDays) return undefined;

  const regionScores: Record<string, number[]> = {};

  destinations.forEach((dest) => {

    if (!regionScores[dest.region]) {
      regionScores[dest.region] = [];
    }

    regionScores[dest.region].push(dest.score);

  });

  const regionAvg: RegionScore[] = Object.entries(regionScores).map(
    ([region, scores]) => ({
      region,
      score: scores.reduce((a, b) => a + b, 0) / scores.length
    })
  );

  regionAvg.sort((a, b) => b.score - a.score);

  return regionAvg;
}