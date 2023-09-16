import React from 'react';
import { useSelector } from 'react-redux';

function MyRockets() {
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <table>
      <tbody>
        {reservedRockets.length > 0 ? (
          reservedRockets.map((rocket) => (
            <tr key={rocket.id} className="profileList">
              <td>{rocket.name}</td>
            </tr>
          ))
        ) : (
          <h3>No Rockets reserved yet</h3>
        )}
      </tbody>
    </table>
  );
}

export default MyRockets;
