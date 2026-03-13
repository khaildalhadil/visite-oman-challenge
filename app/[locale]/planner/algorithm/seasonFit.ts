export function seasonFit(
  travelMonth: number | undefined,
  recommendedMonths: number[]
): number {

  if (!travelMonth) return 0;
    
  if (recommendedMonths.includes(travelMonth)) {
    return 1;
  }

  return 0;
}