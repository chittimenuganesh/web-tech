import useWeather from "../service/UseWeather";
import './Atmosphere.css';

function Atmosphere({ city }) {
  const { data, loading, error } = useWeather(city);

  if (loading) return null;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <div className="card">
        <h3>Wind</h3>
        <InfoRow label="Speed :" value={`${data.current.wind_kph} km/h`} />
        <InfoRow label="Direction :" value={data.current.wind_dir} />
      </div>

      <div className="card">
        <h3>Atmosphere</h3>
        <InfoRow label="Humidity :" value={`${data.current.humidity}%`} />
        <InfoRow label="Visibility :" value={`${data.current.vis_km} km`} />
      </div>

      <div className="card">
        <h3>Rain & Sun</h3>
        <InfoRow label="Precipitation :" value={`${data.current.precip_mm} mm`} />
        <InfoRow label="UV Index :" value={data.current.uv} />
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="info-row">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
}

export default Atmosphere;
