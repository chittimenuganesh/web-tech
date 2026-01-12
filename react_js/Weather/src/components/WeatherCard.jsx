import useWeather from "../service/UseWeather";
import "./Card.css";
import { useState } from "react";

function WeatherCard({ city }) {
  const { data, loading, error } = useWeather(city);
  const [unit, setUnit] = useState("C");

  if (loading) return <p>Loading Weather...</p>;
  if (error) return <p>{error}</p>;

  const temperature = unit === "C" ? data.current.temp_c : data.current.temp_f;

  return (
    <div className="block">
      <div className="temp-card">
        <div className="temp-left">
          <img
            className="image"
            src={`https:${data.current.condition.icon}`}
            alt={data.current.condition.text}
          />
        </div>
        <div className="temp-right">
          <h2 className="temp">
            {temperature}°{unit}
          </h2>
          <p
            className="pointer"
            onClick={() => setUnit(unit === "C" ? "F" : "C")}
          >
            °F | °C
          </p>
        </div>
      </div>

      <div className="card info-card">
        <h3>Location</h3>
        <InfoRow label="Location :" value={data.location.name} />
        <InfoRow label="Region :" value={data.location.region} />
        <InfoRow label="Country :" value={data.location.country} />
        <InfoRow label="Date & Time :" value={data.location.localtime} />
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <p className="info-row">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </p>
  );
}

export default WeatherCard;
