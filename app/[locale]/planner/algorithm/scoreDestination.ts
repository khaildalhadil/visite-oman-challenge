
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
    const interestScore = jaccardSimilarity(
      place.categories,
      favoritesDestinations?.userCategories
    );
  
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
      0,
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