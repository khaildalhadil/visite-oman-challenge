export function jaccardSimilarity(
  userCategories: string[],
  destinationCategories: string[]
): number {

  const userSet = new Set(userCategories);
  const destSet = new Set(destinationCategories);

  let intersection = 0;

  for (const cat of userSet) {
    if (destSet.has(cat)) {
      console.log(cat);
      intersection++;
    }
  }

  const union = new Set([
    ...userCategories,
    ...destinationCategories
  ]).size;

  if (union === 0) return 0;

  return intersection / union;
}