import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  filter: {},
};

export const filterSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    // Action to update filters
    addFilter: (state, action) => {
      state.filter = action.payload;
      console.log("action", action);
    },

    // Special reducer for hydrating the state
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.comments,
        };
      },
    },
  },
});

export const { addFilter } = filterSlice.actions;
export const selectFilters = (state) => state?.comments?.filter;
export default filterSlice.reducer;
