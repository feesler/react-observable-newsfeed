import { createSlice } from '@reduxjs/toolkit'

/** Request news data */
/*
export const readNews = createAsyncThunk(
  'readNews',
  async (_, { dispatch }) => {
    const result = await dispatch(authRequest({ url: newsUrl }));
    if (!result.payload || !result.payload.data) {
      throw new Error((result.error) ? result.error.message : 'Unknown error');
    }

    return result.payload.data;
  },
);
*/

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
      items: [...state.items, ...action.payload.items],
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
