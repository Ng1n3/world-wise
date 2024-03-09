import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { useNavigate } from "react-router-dom";
function Map() {
  const navigate = useNavigate()
  const [searchParams, setSetparams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  console.log(lat);
  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      <button onClick={() => {
        setSetparams({lat: 23, lng: 50})
      }}>
        Change pos
      </button>
    </div>
  );
}

export default Map;