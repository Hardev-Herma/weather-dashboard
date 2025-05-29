import styled from 'styled-components';

const ForecastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  padding: 1rem;
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    padding: 0.5rem;
  }
`;

const ForecastCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.75rem;
  border-radius: 10px;
  text-align: center;
  min-width: 120px;

  @media (max-width: 600px) {
    padding: 0.5rem;
    min-width: 100px;
  }
`;

const ForecastIcon = styled.img`
  width: clamp(40px, 10vw, 50px);
  height: clamp(40px, 10vw, 50px);
  margin: 0 auto;
`;

const ForecastText = styled.p`
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  margin: 0.3rem 0;
`;

function ForecastDisplay({ forecastData, unit }) {
  if (!forecastData) return null;

  const dailyForecasts = forecastData.list.filter((item) =>
    item.dt_txt.includes('12:00:00')
  );

  return (
    <ForecastContainer>
      {dailyForecasts.map((forecast) => (
        <ForecastCard key={forecast.dt}>
          <ForecastText>{new Date(forecast.dt * 1000).toLocaleDateString()}</ForecastText>
          <ForecastIcon
            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            alt={forecast.weather[0].description}
          />
          <ForecastText>{forecast.weather[0].description}</ForecastText>
          <ForecastText>Temp: {forecast.main.temp}°{unit === 'metric' ? 'C' : 'F'}</ForecastText>
        </ForecastCard>
      ))}
    </ForecastContainer>
  );
}

export default ForecastDisplay;