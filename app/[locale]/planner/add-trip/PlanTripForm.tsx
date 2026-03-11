"use client";

import { getPlaces } from "@/app/lib/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const categories: Category[] = [
  "nature",
  "culture",
  "mountain",
  "desert",
  "beach",
  "food",
];

function getPreferredCategories(allPlaces: Destination[]): Category[] {
  
  const saved = localStorage.getItem("favorite-destinations");

  if (!saved) return [];

  const destinations = JSON.parse(saved);
  const ids = new Set(destinations.state.favorites);
  const savedPlaces = allPlaces.filter(place => ids.has(place.id));


  const categories = savedPlaces.flatMap(
    (d: Destination) => d.categories
  );
  return [...new Set(categories)];
}

// I can use react hoot form to make it easy and fast but i did not do it
export default function PlanTripForm() {
  const [tripDays, setTripDays] = useState(5);
  const [budgetTier, setBudgetTier] = useState("medium");
  const [travelMonth, setTravelMonth] = useState(7);
  const [intensity, setIntensity] = useState("balanced");
  const [error, setError] = useState("");
  const [allPlaces, setAllPlaces] = useState<Destination[] | []>([])
  const [interests, setInterests] = useState<string[]>([]);

  const router = useRouter();

  useEffect(()=> {
    async function getAllPlaces() {
      const allPlaces: Destination[] = await getPlaces();
      setAllPlaces(allPlaces);
    }
    getAllPlaces();
  }, [])

  const userCategories = getPreferredCategories(allPlaces);
  console.log(userCategories)

  // const favorites = useFavoriteStore((state)=> state.favorites)
  // const ids = new Set(favorites);

  function toggleInterest(category: string) {
    setInterests((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  }

  function checkIfUserHasIt(category: Category): boolean {



    return userCategories.includes(category) ? true:  false;
  }

  
  

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (tripDays < 1 || tripDays > 7) {
      setError("Trip duration must be between 1 and 7 days.");
      return;
    }

    if (interests.length === 0) {
      setError("Please select at least one interest.");
      return;
    }

    const data = {
      tripDays,
      budgetTier,
      travelMonth,
      intensity,
      userCategories: interests,
    };

    
    localStorage.setItem("tripPreferences", JSON.stringify(data));
    router.push(`/planner`);
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Plan Your Trip</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-lg rounded-xl p-6"
      >
        {/* Trip Duration */}
        <div>
          <label className="block font-medium mb-1">
            Trip Duration (days)
          </label>

          <input
            type="number"
            min={1}
            max={7}
            value={tripDays}
            onChange={(e) => setTripDays(Number(e.target.value))}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block font-medium mb-1">Budget Tier</label>

          <select
            value={budgetTier}
            onChange={(e) => setBudgetTier(e.target.value)}
            className="w-full border rounded-lg p-2"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        {/* Month */}
        <div>
          <label className="block font-medium mb-1">Travel Month</label>

          <select
            value={travelMonth}
            onChange={(e) => setTravelMonth(Number(e.target.value))}
            className="w-full border rounded-lg p-2"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i + 1}>
                {new Date(0, i).toLocaleString("en", { month: "long" })}
              </option>
            ))}
          </select>
        </div>

        {/* Intensity */}
        <div>
          <label className="block font-medium mb-1">Travel Intensity</label>

          <select
            value={intensity}
            onChange={(e) => setIntensity(e.target.value)}
            className="w-full border rounded-lg p-2"
          >
            <option value="relaxed">Relaxed (3 stops/day)</option>
            <option value="balanced">Balanced (4 stops/day)</option>
            <option value="packed">Packed (5 stops/day)</option>
          </select>
        </div>

        {/* Interests */}
        <div>
          <label className="block font-medium mb-2">
            Interests
          </label>

          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              
              <label
                key={category}
                className="flex items-center gap-2 border p-2 rounded-lg cursor-pointer"
              >
                <input
                  type="checkbox"
                  onChange={() => toggleInterest(category)}
                  defaultChecked={checkIfUserHasIt(category)}
                  // checked={userCategories.includes(category)}
                />

                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90"
        >
          Save Preferences
        </button>
      </form>
    </div>
  );
}