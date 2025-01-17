import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Gempa() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGempaData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json');
        console.log(response.data); 
        setData(response.data);
        setLoading(false);
      } catch (e) {
        setError('Error fetching Gempa data');
        setLoading(false);
      }
    };

    fetchGempaData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>No earthquake data available.</div>;
  }

  if (Array.isArray(data)) {
    return (
      <div>
        <h1>Gempa Terkini</h1>
        <ul>
          {data.map((gempa, index) => (
            <li key={index}>
              <p><strong>Tanggal dan Jam:</strong> {new Date(gempa.Timestamp * 1000).toLocaleString()}</p>
              <p><strong>Magnitude:</strong> {gempa.Magnitude}</p>
              <p><strong>Kedalaman:</strong> {gempa.Kedalaman} km</p>
              <p><strong>Koordinat:</strong> {gempa.Lintang}, {gempa.Bujur}</p>
              <p><strong>Wilayah Terdekat:</strong> {gempa.Wilayah}</p>
              <p><strong>Potensi Tsunami:</strong> {gempa.Tsunami === '1' ? 'Ya' : 'Tidak'}</p>
              <p><strong>Dirasakan:</strong> {gempa.Dirasakan && gempa.Dirasakan.toLowerCase().includes('jawa tengah') ? 'Yes' : 'No'}</p>
              <p><strong>Shakemap:</strong> 
                <a href={`https://data.bmkg.go.id/DataMKG/TEWS/${gempa.Shakemap}`} target="_blank" rel="noopener noreferrer">
                  Lihat Peta Guncangan
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div>Data format is not an array, it is: {JSON.stringify(data)}</div>;
  }
}

export default Gempa;
