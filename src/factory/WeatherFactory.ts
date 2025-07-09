import { HandleResponse } from '../services/HandleResponse';
import { FetchResponseDto } from '../services/Type';
import Config from 'react-native-config';

class WeatherFactory {
  getCityWeather = async (city: string): Promise<FetchResponseDto> => {
    const key = Config.OPEN_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    const result = await fetch(url);
    const data: FetchResponseDto = await HandleResponse(result);
    return data;
  };
}

export const weatherFactory = new WeatherFactory();
