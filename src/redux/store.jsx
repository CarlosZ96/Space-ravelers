import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketSlice';
import missionsReducer from './missions/missionsSlice';

const rootReducer = {
  rockets: rocketsReducer,
  missions: missionsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
