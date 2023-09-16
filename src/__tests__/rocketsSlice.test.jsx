import rocketSlice, { reserveRocket, cancelReservation } from '../redux/rockets/rocketSlice'; // Import your actions

describe('Rocket reducers', () => {
  it('should handle reserving rockets', () => {
    const initialState = {
      rockets: [
        {
          id: '1',
          reserved: false,
        },
        {
          id: '2',
          reserved: false,
        },
      ],
    };

    const newState = rocketSlice(
      initialState,
      reserveRocket('1'), // Reserve the rocket with id '1'
    );

    // Check that the rocket with id '1' is now reserved
    expect(newState.rockets[0].reserved).toBe(true);
    // Check that other rockets are not affected
    expect(newState.rockets[1].reserved).toBe(false);
  });

  it('should handle cancelling rockets', () => {
    const initialState = {
      rockets: [
        {
          id: '1',
          reserved: true, // Rocket '1' is initially reserved
        },
        {
          id: '2',
          reserved: false,
        },
      ],
    };

    const newState = rocketSlice(
      initialState,
      cancelReservation('1'), // Cancel the reservation for rocket '1'
    );

    // Check that the reservation for rocket '1' is canceled
    expect(newState.rockets[0].reserved).toBe(false);
    // Check that other rockets are not affected
    expect(newState.rockets[1].reserved).toBe(false);
  });
});
