import { useEffect } from "react";
import { gsap } from "gsap";

export default function WeatherCard({ lokasi, cuacaData }) {

  return (
    <div className="weather-card-container flex overflow-x-auto space-x-6 py-4">
      {cuacaData?.map((forecast, index) => (
        <div
          key={index}
          className="weather-card w-64 md:w-80 mb-10 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6"
        >
          <div className="text-md font-bold flex flex-col text-gray-900">
            <span className="uppercase">{lokasi?.provinsi} - {lokasi?.kotkab}</span>
            <span className="font-normal text-gray-700 text-sm">{forecast.local_datetime}</span>
          </div>

          <div className="mt-4 text-gray-700">
            <div className="mt-4">
              <div className="mb-4 p-4 border-b border-gray-300">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {forecast.t}°C
                </div>
                <div className="text-gray-700 mb-2">{forecast.weather_desc}</div>
                <div className="flex items-center justify-center mb-2">
                  <img src={forecast.image} alt={forecast.weather_desc} className="w-16 h-16" />
                </div>
                <div className="text-gray-700">
                  <p><strong>Kelembapan Udara:</strong> {forecast.hu}%</p>
                  <p><strong>Kecepatan Angin:</strong> {forecast.ws} km/jam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
