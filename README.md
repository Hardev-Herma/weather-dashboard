# Weather Dashboard

A modern, responsive React-based weather dashboard that provides current weather conditions and a 5-day forecast for any city using the OpenWeatherMap API. The application integrates Redux Toolkit for state management, React Query for efficient data fetching, and styled-components for a polished, adaptive UI.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Approach to the Assignment](#approach-to-the-assignment)

## Description
The Weather Dashboard is a React web application that enables users to search for a city and view its current weather details and a 5-day forecast. It supports switching between Celsius and Fahrenheit units, persists the last searched city in `localStorage`, and offers a responsive design with loading and error states.

## Features
- Search for current weather and forecasts by city name (e.g., "Delhi").
- Toggle between Celsius and Fahrenheit units for temperature and wind speed.
- Display current weather: temperature, humidity, wind speed, description, and icon.
- Show a 5-day forecast with daily data at 12:00 PM.
- Responsive layout optimized for desktop and mobile devices.
- Automatic data refresh every 30 seconds.
- Persist the last searched city in `localStorage` (defaults to "Delhi").
- Loading spinner and error messages for robust user feedback.

## Technologies
- **React**: Core library for building the dynamic user interface.
- **Redux Toolkit**: Manages client-side state (city and unit).
- **React Query (@tanstack/react-query)**: Facilitates API data fetching, caching, and periodic refetching.
- **Styled-Components**: Enables modular, responsive CSS styling.
- **Axios**: Handles HTTP requests to the OpenWeatherMap API.
- **OpenWeatherMap API**: Provides real-time weather and forecast data.
- **Vite**: Fast build tool for development and production bundling.

## Setup
Follow these steps to set up and run the Weather Dashboard locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install Dependencies**:
   Install Node.js dependencies using npm:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the project root.
   - Add your OpenWeatherMap API key:
     ```
     VITE_WEATHER_API_KEY=your-api-key-here
     ```
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api) to obtain a free API key.

4. **Run the Application**:
   Start the development server:
   ```bash
   npm run dev
   ```
   The app will open in your browser at `http://localhost:5173` (or another port if configured).

5. **Build for Production** (optional):
   Generate a production build:
   ```bash
   npm run build
   ```

## Usage
- **Search for a City**:
  - Enter a city name (e.g., "Mumbai") in the search bar and click "Search".
  - The dashboard displays the current weather (temperature, humidity, wind speed, description) and a 5-day forecast.
- **Toggle Units**:
  - Use the dropdown to switch between Celsius (°C, m/s) and Fahrenheit (°F, mph).
  - Weather data updates automatically to reflect the selected unit.
- **Persistent City**:
  - The last searched city is saved in `localStorage` and loaded on app startup (defaults to "London").
- **Automatic Updates**:
  - Weather and forecast data refresh every 30 seconds to stay current.
- **Responsive Design**:
  - The UI adapts to screen sizes, with a stacked layout on mobile devices and a wider layout on desktops.

## Approach to the Assignment
The Weather Dashboard was developed with a focus on functionality, performance, and user experience, adhering to modern React best practices. My approach included:

- **Structured Architecture**:
  - Employed React Query for server-side data management, leveraging its caching and refetching (every 30 seconds).
  - Used Redux Toolkit for client-side state (`city`, `unit`), ensuring separation from server data.
  - Designed components (`SearchBar`, `WeatherDisplay`, `ForecastDisplay`, `ErrorMessage`, `LoadingSpinner`) as presentational, receiving props for modularity.

- **Efficient Data Handling**:
  - Configured React Query’s `useQuery` with dynamic `queryKey` (e.g., `['weather', { city, unit }]`) to fetch data based on user input and unit settings.
  - Filtered forecast data in `ForecastDisplay` to display one entry per day at 12:00 PM, optimizing the 5-day view.
  - Persisted the last searched city in `localStorage` via Redux, initializing with "Delhi".

- **Responsive Styling**:
  - Utilized `styled-components` for scoped CSS, implementing semi-transparent cards and a gradient background.
  - Ensured responsiveness using CSS Grid (`ForecastDisplay`), flexbox (`SearchBar`), `clamp` for scalable sizes, and media queries for mobile layouts.

This approach delivered a robust, user-friendly weather dashboard, while prioritizing scalability and modern development standards.