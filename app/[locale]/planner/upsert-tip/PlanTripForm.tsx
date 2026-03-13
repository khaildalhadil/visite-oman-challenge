"use client";

import { getPlaces } from "@/app/lib/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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
  const [allPlaces, setAllPlaces] = useState<Destination[] | []>([])
  const [dataFromLocalSto, setDataFromLocalSto] = useState<null | FavoriteDestinations>(null);

  const router = useRouter();

   const {
     register,
     handleSubmit,
     watch,
     reset,
     formState: { errors },
   } = useForm<FavoriteDestinations>({ defaultValues: dataFromLocalSto || {} });


  useEffect(() => {
    async function getAllPlaces() {
      const allPlaces = await getPlaces();
      setAllPlaces(allPlaces);

      const userDataAsString = localStorage.getItem("tripPreferences");

      const preferredCategories = getPreferredCategories(allPlaces);

      if (userDataAsString) {
        const userDataAsJSON = JSON.parse(userDataAsString);
        setDataFromLocalSto(userDataAsJSON);
        reset(userDataAsJSON);
      }else {
      reset({
        userCategories: preferredCategories
      });
      }
    }

    getAllPlaces();
  }, [reset]);

  const budgetTierOptions = [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'Luxury', value: 'luxury' },
  ];

  const RelaxOptions = [
    { label: 'Relaxed (3 stops/day)', value: 'relaxed' },
    { label: 'Balanced (4 stops/day)', value: 'balanced' },
    { label: 'Packed (5 stops/day)', value: 'packed' },
  ];

  function onSubmit(data: FavoriteDestinations) {
    toast.success(`${dataFromLocalSto ? "Updated Success": "Added Success"}`)
    localStorage.setItem("tripPreferences", JSON.stringify(data));
    router.push(`/planner`);
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        {dataFromLocalSto ? "Update Your Tip" : "Add New Trip"}
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white shadow-lg rounded-xl p-6"
      >
        {/* Trip Duration */}
        <div>
          <label className="block font-medium mb-1">Trip Duration (days)</label>

          <input
            type="number"
            defaultValue={5}
            {...register("tripDays", {
              required: "Please Enter Trip Days",
              max: 7,
              min: 1,
            })}
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block font-medium mb-1" htmlFor="mySelect">
            Budget Tier
          </label>

          <select
            className="w-full border rounded-lg p-2"
            id="mySelect"
            {...register("budgetTier", { required: "Please select an option" })}
          >
            {budgetTierOptions.map((option) => (
              <option key={option.value} value={option.value} >
                {option.value}
              </option>
            ))}
          </select>
          {/* {errors.mySelect && (
            <p className="text-red-600">{errors.root?.message}</p>
          )} */}
        </div>

        {/* Month */}
        <div>
          <label className="block font-medium mb-1">Travel Month</label>

          <select
            {...register("travelMonth")}
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
            // value={intensity}
            // onChange={(e) => setIntensity(e.target.value)}
            {...register("intensity")}
            className="w-full border rounded-lg p-2"
          >
            {RelaxOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Interests */}
        <div>
          <label className="block font-medium mb-2">Interests</label>

          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-2 border p-2 rounded-lg cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={category}
                  {...register("userCategories")}
                  // className="hidden"
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Error */}
        {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 cursor-pointer"
        >
          {dataFromLocalSto ? "Update " :"Save"}  Preferences
        </button>
      </form>
    </div>
  );
}