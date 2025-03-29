import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'favorite_repos';

const loadFavorites = async () => {
  const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const saveFavorites = async (favorites) => {
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    toggleFavorite: (state, action) => {
      const repo = action.payload;
      const index = state.favorites.findIndex((item) => item.id === repo.id);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(repo);
      }
      saveFavorites(state.favorites);
    },
  },
});

export const { setFavorites, toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
