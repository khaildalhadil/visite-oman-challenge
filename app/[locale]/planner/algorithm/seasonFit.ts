export function seasonFit(
  travelMonth: number,
  recommendedMonths: number[]
): number {

  if (recommendedMonths.includes(travelMonth)) {
    return 1;
  }

  return 0;
}