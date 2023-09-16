import React from 'react';
import MyMissions from './MyMissions';
import MyRockets from './MyRockets';

function Profile() {
  return (
    <div className="myProfileWrapper">

      <div>
        <h2>My Missions</h2>
        <MyMissions />
      </div>
      <div>
        <h2>Reserved Rockets</h2>
        <MyRockets />
      </div>

    </div>
  );
}

export default Profile;
