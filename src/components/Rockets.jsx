import { useSelector } from 'react-redux';
import '../stylesheets/rockets.css';
import Reserve from './Reserves';

function Rockets() {
  const rockets = useSelector((state) => state.rockets.rockets);
  return (
    <div className="rockets-container">
      {
        rockets.map((rocket) => (
          <div key={rocket.id} className="rocket-card">
            <div className="rocket-img-container">
              <img src={rocket.flickr_images} alt="rocketimage" className="rocket-img" />
            </div>
            <div className="text-container">
              <h2 className="name">{rocket.name}</h2>
              <Reserve key={rocket.id} rocketId={rocket.id} description={rocket.description} />
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Rockets;
