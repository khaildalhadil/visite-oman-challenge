export {}
declare global {
  type Destination = {

    id: string;
    name: {
      en: string;
      ar: string;
    };
    lat: number;
    lng: number;
    region: {
      en: string;
      ar: string;
    };
    categories: ("culture" | "food" | "nature" | "beach" | "mountain" | "desert" )[];
    company: {
      en: string;
      ar: string;
    };
    avg_visit_duration_minutes: number;
    ticket_cost_omr: number;
    recommended_months: number[];
    crowd_level: 1 | 2 | 3 | 4 | 5;
  }

  type LocaleType = "en" | "ar"
  type Category = "culture" | "food" | "nature" | "beach" | "mountain" | "desert";
  type Season =
    | "January"
    | "February"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August"
    | "September"
    | "October"
    | "November"
    | "December";


  type ThemeType = {
    themeLight: boolean;
    setTheme: (b: boolean) => void;
  }

  type FavoriteDestinations = {
    tripDays: number
    budgetTier: string
    travelMonth: number
    intensity: "relaxed" | "balanced" | "intense"
    userCategories: string[]
 }

  type Region = {
    name: string;
    destinations: Destination[];
    avgSeasonFit: number; // متوسط SeasonFit لكل الوجهات في المنطقة
  };

  type DestinationScore = {
    id: string;
    name: string;
    region: string;
    score: number;
  };

  
  type RegionScore = {
    region: string;
    score: number;
  };

  type DayPlan = {
    day: number
    places: DestinationScore[]
  }


}
