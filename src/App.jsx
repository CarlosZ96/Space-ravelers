import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Mission from './components/Mission';
import Header from './components/Header';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import { fetchMissions } from './redux/missions/missionsSlice';
import { getRockets } from './redux/rockets/rocketSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
