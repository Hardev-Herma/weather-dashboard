import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ErrorMessage from './components/ErrorMessage';
import ForecastDisplay from './components/ForecastDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import { setCity } from './redux/weatherSlice';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2% 5%;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
  min-height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 600px) {
    padding: 4% 5%;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
`;

const fetchWeather = async ({ queryKey }) => {
  const [, { city, unit }] = queryKey;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  );
  return response.data;
};

const fetchForecast = async ({ queryKey }) => {
  const [, { city, unit }] = queryKey;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  );
  return response.data;
};

function App() {
  const dispatch = useDispatch();
  const { city, unit } = useSelector((state) => state.weather); // Extract unit from Redux

  // Initial city load from localStorage
  useEffect(() => {
    const savedCity = localStorage.getItem('lastCity') || 'London';
    dispatch(setCity(savedCity));
  }, [dispatch]);

  // React Query for weather data
  const weatherQuery = useQuery({
    queryKey: ['weather', { city, unit }],
    queryFn: fetchWeather,
    refetchInterval: 30000,
    enabled: !!city,
  });

  // React Query for forecast data
  const forecastQuery = useQuery({
    queryKey: ['forecast', { city, unit }],
    queryFn: fetchForecast,
    refetchInterval: 30000,
    enabled: !!city,
  });

  const isLoading = weatherQuery.isLoading || forecastQuery.isLoading;
  const error = weatherQuery.error || forecastQuery.error;

  return (
    <AppContainer>
      <Title>Weather Dashboard</Title>
      <SearchBar />
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage error={error.message} />
      ) : (
        <>
          <WeatherDisplay weatherData={weatherQuery.data} unit={unit} /> {/* Pass unit prop */}
          <ForecastDisplay forecastData={forecastQuery.data} unit={unit} />
        </>
      )}
    </AppContainer>
  );
}

export default App;