import Divider from "./Divider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faWind,
  faCloud,
  faUmbrella,
  faTemperatureHalf,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
  faSun,
  faMoon,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Details() {
  return (
    <div>
      <Divider />
      <div className="grid grid-cols-2 gap-2">
        <span>
          <FontAwesomeIcon icon={faSun} /> Sunset: 07:00 AM
        </span>
        <span>
          <FontAwesomeIcon icon={faMoon} /> Sunrise: 06:00 PM
        </span>
        <span>
          <FontAwesomeIcon icon={faCloud} /> Cloud: 50%
        </span>
        <span>
          <FontAwesomeIcon icon={faUmbrella} /> Rain: 30%
        </span>
        <span>
          <FontAwesomeIcon icon={faDroplet} /> Humidity: 33%
        </span>
        <span>
          <FontAwesomeIcon icon={faTemperatureHalf} /> Feel Like: 33°C
        </span>
        <span>
          <FontAwesomeIcon icon={faTemperatureArrowUp} /> High: 34°C
        </span>
        <span>
          <FontAwesomeIcon icon={faTemperatureArrowDown} /> Low: 36°C
        </span>
      </div>
    </div>
  );
}

export default Details;
