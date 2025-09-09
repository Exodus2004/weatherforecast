# Weather Forecast Application

This is a modern and responsive web application built with React.js that provides real-time weather updates and a 5-day forecast for any city worldwide.

## Features

*   **Current Weather Display:** Shows current temperature, conditions, and other relevant weather data.
*   **5-Day Forecast:** Provides a detailed 5-day weather forecast.
*   **City Search:** Allows users to search for weather information by city name.
*   **Loading Indicators:** Displays a loading spinner while fetching data.
*   **Error Handling:** Gracefully handles API errors and displays informative messages.
*   **Responsive Design:** Optimized for various screen sizes.

## Technologies Used

*   **Frontend:**
    *   React.js
    *   Vite (Build Tool)
    *   JavaScript
    *   CSS
*   **API:**
    *   OpenWeatherMap API (or similar, requires an API key)

## Getting Started

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or Yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Exodus2004/weatherforecast.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd weatherforecast/weather-forecast-app
    ```
3.  Install dependencies:
    ```bash
    npm install
    # or yarn install
    ```
4.  Create a `.env` file in the `weather-forecast-app` directory and add your API key:
    ```
    VITE_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
    ```
    Replace `YOUR_OPENWEATHERMAP_API_KEY` with your actual API key from OpenWeatherMap or your chosen weather service.

### Running the Application

To start the development server:

```bash
npm run dev
# or yarn dev
```

The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

1.  Open the application in your web browser.
2.  Use the search bar to enter the name of a city.
3.  Press Enter or click the search button to get the current weather and 5-day forecast for that city.

## Project Structure

```
weatherforecast/
├── weather-forecast-app/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/ (SearchBar, WeatherCard, ForecastCard, LoadingSpinner)
│   │   ├── hooks/ (useWeather)
│   │   ├── styles/ (App.css)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── vite.config.js
├── .gitignore
├── LICENSE
└── README.md (this file)
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
