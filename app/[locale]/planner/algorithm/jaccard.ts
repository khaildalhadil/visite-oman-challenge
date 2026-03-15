export function jaccardSimilarity(
  userCategories: string[],
  destinationCategories: string[] | undefined
): number {
  
  if(!destinationCategories) return 0;
  
  const userSet = new Set(userCategories);
  const destSet = new Set(destinationCategories);
  
  let intersection = 0;
  
  for (const cat of userSet) {
    if (destSet.has(cat)) {
      // add one it we have same category in both array user form and user fav
      intersection++;
    }
  }
  
  // get length of the union
  const union = new Set([
    ...userCategories,
    ...destinationCategories
  ]).size;

  if (union === 0) return 0;

  return intersection / union;
}