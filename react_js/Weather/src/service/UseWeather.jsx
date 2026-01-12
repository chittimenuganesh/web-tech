import { useEffect, useState } from "react";

function useWeather(city) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    setError(null);

    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    )
      .then(res => {
        if (!res.ok) throw new Error("Weather API failed");
        return res.json();
      })
      .then(result => {
        console.log('API RESPONSE:',result)
        setData(result);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [city, API_KEY]);

  return { data, loading, error };
}

export default useWeather;
    