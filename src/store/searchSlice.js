import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  filteredProducts: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setSearchQuery, setFilteredProducts } = searchSlice.actions;

// Selectors
export const selectSearchQuery = (state) => state.search.query;
export const selectFilteredProducts = (state) => state.search.filteredProducts;

export default searchSlice.reducer;