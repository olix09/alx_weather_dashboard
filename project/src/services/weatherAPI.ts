const API_KEY = 'your-openweathermap-api-key'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface WeatherData {
  name: string;
  country: string;
  temperature: number;
  feelsLike: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  uvIndex: number;
  sunrise: number;
  sunset: number;
}

export interface ForecastItem {
  dt: number;
  temp: number;
  tempMin?: number;
  tempMax?: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}

export interface AirQualityData {
  aqi: number;
  co: number;
  no2: number;
  o3: number;
  pm2_5: number;
  pm10: number;
}

// Mock data for demo purposes (replace with actual API calls)
export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock data - replace with actual API call
  return {
    name: city,
    country: 'US',
    temperature: 22,
    feelsLike: 25,
    description: 'Partly cloudy',
    icon: '02d',
    humidity: 65,
    windSpeed: 12,
    pressure: 1013,
    visibility: 10,
    uvIndex: 6,
    sunrise: Date.now() - 6 * 60 * 60 * 1000,
    sunset: Date.now() + 6 * 60 * 60 * 1000,
  };
};

export const fetchForecastData = async (city: string): Promise<ForecastItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock hourly forecast data
  return Array.from({ length: 24 }, (_, i) => ({
    dt: Date.now() + i * 60 * 60 * 1000,
    temp: 20 + Math.random() * 10,
    description: ['Sunny', 'Partly cloudy', 'Cloudy', 'Light rain'][Math.floor(Math.random() * 4)],
    icon: ['01d', '02d', '03d', '10d'][Math.floor(Math.random() * 4)],
    humidity: 50 + Math.random() * 30,
    windSpeed: 5 + Math.random() * 15,
  }));
};

export const fetchDailyForecast = async (city: string): Promise<ForecastItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock daily forecast data
  return Array.from({ length: 10 }, (_, i) => ({
    dt: Date.now() + i * 24 * 60 * 60 * 1000,
    temp: 18 + Math.random() * 12,
    tempMin: 15 + Math.random() * 5,
    tempMax: 25 + Math.random() * 8,
    description: ['Sunny', 'Partly cloudy', 'Cloudy', 'Light rain', 'Thunderstorm'][Math.floor(Math.random() * 5)],
    icon: ['01d', '02d', '03d', '10d', '11d'][Math.floor(Math.random() * 5)],
    humidity: 50 + Math.random() * 30,
    windSpeed: 5 + Math.random() * 15,
  }));
};

export const fetchAirQuality = async (city: string): Promise<AirQualityData> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  
  return {
    aqi: Math.floor(Math.random() * 5) + 1,
    co: 200 + Math.random() * 100,
    no2: 20 + Math.random() * 30,
    o3: 50 + Math.random() * 50,
    pm2_5: 10 + Math.random() * 20,
    pm10: 15 + Math.random() * 25,
  };
};

export const getCurrentPosition = (): Promise<{ lat: number; lon: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        reject(new Error('Failed to get location'));
      }
    );
  });
};