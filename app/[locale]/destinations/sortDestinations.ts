
export function sortDestinations(destinations: Destination[], sort: string) {
  const results = [...destinations];

  switch (sort) {
    case "crowd-asc":
      return results.sort((a, b) => a.crowd_level - b.crowd_level);

    case "crowd-desc":
      return results.sort((a, b) => b.crowd_level - a.crowd_level);

    case "cost-asc":
      return results.sort((a, b) => a.ticket_cost_omr - b.ticket_cost_omr);

    case "cost-desc":
      return results.sort((a, b) => b.ticket_cost_omr - a.ticket_cost_omr);

    default:
      return results;
  }
}