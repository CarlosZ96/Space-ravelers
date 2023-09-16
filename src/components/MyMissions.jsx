import React from 'react';
import { useSelector } from 'react-redux';

function MyMissions() {
  const { missions } = useSelector((state) => state.missions);
  const { reservedMissions } = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => reservedMissions
    .includes(mission.mission_id));

  return (
    <table>
      <tbody>
        {
              joinedMissions.length < 1 ? (<h3>No Missions Joined</h3>)
                : joinedMissions.map((mission) => (
                  <tr key={mission.mission_id} className="profileList">
                    <td>{mission.mission_name}</td>
                  </tr>
                ))
            }
      </tbody>
    </table>
  );
}

export default MyMissions;
