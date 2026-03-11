import { create } from "zustand"
import { persist } from "zustand/middleware"

type FavoriteStore = {
  favorites: string[]
  toggleFavorite: (id: string) => void
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((f) => f !== id)
            : [...state.favorites, id],
        })),
    }),
    {
      name: "favorite-destinations",
    },
  ),
);