
import { jaccardSimilarity } from './jaccard';
import { seasonFit } from './seasonFit';
import normalize from './normalize';
import { SCORE_WEIGHTS } from '@/app/lib/constantValues';

export default function calculateDestinationScore(
  favoritesDestinations: FavoriteDestinations | undefined,
  savedPlaces: Destination[]
  ): DestinationScore[] | null {

  if(!favoritesDestinations) return null;

  const scoredDestinations = savedPlaces.map((place) => {

    // Jaccard algo interection user favorite categories / union user favorite categories + userCategories
    const interestScore = jaccardSimilarity(
      place.categories,
      favoritesDestinations?.userCategories
    );
  
    // check if season fit
    const seasonScore = seasonFit(
      favoritesDestinations?.travelMonth,
      place.recommended_months
    );
  
    const crowdScore = normalize(
      place.crowd_level,
      1,
      5
    );
  
    const costScore = normalize(
      place.ticket_cost_omr,
      // min
      0,
      // max
      20
    );

    const score =
      interestScore * SCORE_WEIGHTS.interest  +
      seasonScore * SCORE_WEIGHTS.season-
      crowdScore * SCORE_WEIGHTS.crowd-
      costScore* SCORE_WEIGHTS.cost ;

    return {
      id: place.id,
      region: place.region.en,
      name: place.name.en,
      score
    };
  })

  return scoredDestinations;
}


export function sortAndTopDestinations(result: DestinationScore[] | null, userformInterests:FavoriteDestinations | undefined) {
  if (!result || !userformInterests) return;

  const sortedResult = result.sort((per, next) =>  next.score - per.score);
  const topDestinations = sortedResult.slice(0, userformInterests.tripDays * 3);

  return topDestinations;

}