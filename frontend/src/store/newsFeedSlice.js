import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const newsFeedSlice = createSlice({
  name: 'newsFeed',
  initialState,
  reducers: {
    readNews: (state, action) => ({
      ...state,
      loading: true,
      error: null,
    }),
    readNewsSuccess: (state, action) => ({
      ...state,
      loading: false,
      items: [...state.items, ...action.payload],
    }),
    readNewsFailure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
  },
  extraReducers: {
  },
});

export const {
  readNews,
  readNewsSuccess,
  readNewsFailure,
} = newsFeedSlice.actions;
export default newsFeedSlice.reducer;
