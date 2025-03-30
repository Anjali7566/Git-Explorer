import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRepositoriesFromAPI } from '../../utils/api';

// Thunk for async API call
export const fetchRepositories = createAsyncThunk(
  'search/fetchRepositories',
  async (query) => {
    const data = await fetchRepositoriesFromAPI(query);
    return data;
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
