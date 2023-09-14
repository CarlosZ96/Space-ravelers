import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://api.spacexdata.com/v3/rockets',
      );
      const rocketsApi = response.data;
      const rocketsFilter = [];
      rocketsApi.forEach((rocket) => {
        const idApi = rocket.id;
        const nameApi = rocket.rocket_name;
        const TypeApi = rocket.rocket_type;
        const descriptionApi = rocket.description;
        const imgApi = rocket.flickr_images[0];
        rocketsFilter.push(
          {
            id: idApi,
            name: nameApi,
            description: descriptionApi,
            type: TypeApi,
            flickr_images: imgApi,
          },
        );
      });
      return rocketsFilter;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => ({
      ...state,
      rockets: action.payload,
    }));
  },
});

export default rocketSlice.reducer;
