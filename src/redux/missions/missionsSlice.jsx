import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchMissions = createAsyncThunk('fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  return response.data;
});

const initialState = {
  missions: [],
  isloading: false,
  reservedMissions: [],
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      if (!state.reservedMissions.includes(missionId)) {
        state.reservedMissions.push(missionId);
      }
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      return {
        ...state,
        reservedMissions: state.reservedMissions.filter((id) => id !== missionId),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isloading: true,
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
        isloading: false,
      }))
      .addCase(fetchMissions.rejected, (state) => ({
        ...state,
        isloading: false,
      }));
  },
});

export { fetchMissions };
export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
