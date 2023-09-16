import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const MissionsView = ({ missionsProp }) => {
  const { reservedMissions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const isMissionReserved = reservedMissions.includes(missionsProp.mission_id);
  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  const handleJoinMissions = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <tbody>
      <tr>
        <td>{missionsProp.mission_name}</td>
        <td>{missionsProp.description}</td>
        <td>
          {isMissionReserved ? (
            <button type="button" className="activeMember">
              ACTIVE MEMBER
            </button>
          ) : (
            <button type="button" className="notMember">
              NOT A MEMBER
            </button>
          )}
        </td>
        <td>
          {isMissionReserved ? (
            <button
              type="button"
              className="leave"
              onClick={() => handleLeaveMission(missionsProp.mission_id)}
            >
              LEAVE MISSION
            </button>
          ) : (
            <button
              type="button"
              className="join"
              onClick={() => handleJoinMissions(missionsProp.mission_id)}
            >
              JOIN MISSION
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};

MissionsView.propTypes = {
  missionsProp: PropTypes.instanceOf(Object).isRequired,
};

export default MissionsView;
