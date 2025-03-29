import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/repositories?q=';

export const fetchRepositories = createAsyncThunk(
  'search/fetchRepositories',
  async (query) => {
    const response = await axios.get(`${GITHUB_API_URL}${query}`);
    return response.data.items;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    repositories: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.repositories = action.payload;
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
