import styled from 'styled-components';

const WeatherCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const WeatherIcon = styled.img`
  width: clamp(80px, 20vw, 100px);
  height: clamp(80px, 20vw, 100px);
  margin: 0 auto;
`;

const WeatherText = styled.p`
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  margin: 0.5rem 0;
`;

const CityName = styled.h2`
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  margin: 0.5rem 0;
`;

function WeatherDisplay({ weatherData, unit }) {
  if (!weatherData) return null;

  const { main, weather, wind, name } = weatherData;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <WeatherCard>
      <CityName>{name}</CityName>
      <WeatherIcon src={iconUrl} alt={weather[0].description} />
      <WeatherText>{weather[0].description}</WeatherText>
      <WeatherText>Temperature: {main.temp}°{unit === 'metric' ? 'C' : 'F'}</WeatherText>
      <WeatherText>Humidity: {main.humidity}%</WeatherText>
      <WeatherText>Wind Speed: {wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</WeatherText>
    </WeatherCard>
  );
}

export default WeatherDisplay;