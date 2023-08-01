export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherDescription[];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number; 
    temp_max: number; 
  };
   name: string; 
  wind: {
    speed: number; 
  };
}


export interface WeatherDescription {
  description: string;
}