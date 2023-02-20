import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { filterSlice } from './filterSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [filterSlice.name]: filterSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);