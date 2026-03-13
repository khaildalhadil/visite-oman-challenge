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
      intersection++;
    }
  }
  

  const union = new Set([
    ...userCategories,
    ...destinationCategories
  ]).size;

  // console.log(userCategories)
  // console.log(destinationCategories)

  if (union === 0) return 0;

  return intersection / union;
}