import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

function Weather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=33.09.01.2005');
        setData(response.data);
        setLoading(false);
      } catch (e) {
        setError('Error fetching weather data');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Mengakses data lokasi
  const lokasi = data?.lokasi;

  if (!lokasi) return <p>No location data available</p>;

  // Mengakses data cuaca
  const cuacaData = data?.data?.[0]?.cuaca?.[0]; // Mengakses cuaca pertama

  if (!cuacaData) return <p>No weather data available</p>;

  return (
    // <div>
    //   <h1>Prakiraan Cuaca</h1>
    //   <div>
    //     <h2>Lokasi</h2>
    //     <p><strong>Provinsi:</strong> {lokasi.provinsi}</p>
    //     <p><strong>Kabupaten/Kota:</strong> {lokasi.kotkab}</p>
    //     <p><strong>Kecamatan:</strong> {lokasi.kecamatan}</p>
    //     <p><strong>Desa:</strong> {lokasi.desa}</p>
    //     <p><strong>Timezone:</strong> {lokasi.timezone}</p>
    //     {cuacaData.map((forecast, index) => (
    //       <div key={index}>
    //         <h3>Waktu: {forecast.local_datetime}</h3>
    //         <p><strong>Suhu Udara:</strong> {forecast.t}°C</p>
    //         <p><strong>Kelembapan Udara:</strong> {forecast.hu}%</p>
    //         <p><strong>Deskripsi Cuaca:</strong> {forecast.weather_desc}</p>
    //         <p><strong>Kecepatan Angin:</strong> {forecast.ws} km/jam</p>
    //         <p><strong>Arah Angin:</strong> {forecast.wd}</p>
    //         <p><strong>Tutupan Awan:</strong> {forecast.tcc}%</p>
    //         <p><strong>Jarak Pandang:</strong> {forecast.vs_text} km</p>
    //         <img src={forecast.image} alt={forecast.weather_desc} />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="max-w-5xl p-4">
        <h1 className="font-bold text-6xl text-center">Perkiraan Cuaca</h1>
        <p className="text-center font-thin mb-2">Data dari BMKG</p>
        <WeatherCard lokasi={lokasi} cuacaData={cuacaData}/>
    </div>
  );
}

export default Weather;
