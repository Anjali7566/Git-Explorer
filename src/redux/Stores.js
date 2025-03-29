import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './Slices/searchSlice';
import favouriteReducer from './Slices/favouriteSlice';
import themeReducer from './Slices/themeSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    favorites: favouriteReducer,
    theme: themeReducer,
  },
});
