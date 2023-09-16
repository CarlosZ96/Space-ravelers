import missionsReducer, { joinMission, leaveMission } from '../redux/missions/missionsSlice'; // Import your reducers

describe('missionsSlice reducers', () => {
  it('should handle joining a mission', () => {
    const initialState = {
      missions: [],
      isLoading: false,
      reservedMissions: [],
    };

    const missionId = '2dsds';

    const newState = missionsReducer(initialState, joinMission(missionId));

    expect(newState.reservedMissions).toContain(missionId);
  });

  it('should handle leaving a mission', () => {
    const initialState = {
      missions: [],
      isLoading: false,
      reservedMissions: ['2dsds', 'dq1sds'], // Initial reserved missions
    };

    const missionId = '2dsds';

    const newState = missionsReducer(initialState, leaveMission(missionId));

    expect(newState.reservedMissions).not.toContain(missionId);
  });
});
