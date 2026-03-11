import { persist } from 'zustand/middleware';
import { create } from 'zustand'

const useThemeStore = create<ThemeType>()(

  persist(
    (set) => ({
      themeLight: true,
      setTheme: () => (set((state) => ({themeLight: !state.themeLight})))
    }), {
    name: "theme"
  }
)
)

export default useThemeStore;