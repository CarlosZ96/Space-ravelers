import React from 'react';
import { useSelector } from 'react-redux';
import MissionsView from './MissionsView';

function Mission() {
  const { missions } = useSelector((state) => state.missions);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th className="fade">Status</th>
          </tr>
        </thead>
        {
            missions
              .map((mission) => <MissionsView key={mission.mission_id} missionsProp={mission} />)
         }
      </table>
    </div>
  );
}

export default Mission;
