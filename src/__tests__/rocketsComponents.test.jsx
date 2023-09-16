import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Rockets from '../components/Rockets';
import MyRockets from '../components/MyRockets';
import Reserves from '../components/Reserves';

jest.mock('../components/Rockets');
jest.mock('../components/MyRockets');
jest.mock('../components/Reserves');

describe('Testing components', () => {
  it('renders Rockets component', () => {
    const rockets = render(<Rockets />);
    expect(rockets).toMatchSnapshot();
  });

  it('renders MyRockets component', () => {
    const myRockets = render(<MyRockets />);
    expect(myRockets).toMatchSnapshot();
  });

  it('renders Reserves component', () => {
    const reserves = render(<Reserves />);
    expect(reserves).toMatchSnapshot();
  });
});
