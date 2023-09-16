import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/Header';
import Mission from '../components/Mission';
import MissionsView from '../components/MissionsView';
import Profile from '../components/Profile';
import MyMissions from '../components/MyMissions';

jest.mock('../components/MyMissions');
jest.mock('../components/Mission');
jest.mock('../components/MissionsView');
jest.mock('../components/Profile');
jest.mock('../components/Header');

describe('Testing components', () => {
  it('renders Header component', () => {
    const header = render(<Header />);
    expect(header).toMatchSnapshot();
  });

  it('renders Mission component', () => {
    const mission = render(<Mission />);
    expect(mission).toMatchSnapshot();
  });

  it('renders MissionsView component', () => {
    const missionsView = render(<MissionsView />);
    expect(missionsView).toMatchSnapshot();
  });

  it('renders Profile component', () => {
    const profile = render(<Profile />);
    expect(profile).toMatchSnapshot();
  });

  it('renders MyMissions component', () => {
    const myMissions = render(<MyMissions />);
    expect(myMissions).toMatchSnapshot();
  });
});
