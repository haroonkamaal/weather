import { HandleResponse } from '../services/HandleResponse';
import { FetchResponseDto } from '../services/Type';

class WeatherFactory {
  getCityWeather = async (city: string): Promise<FetchResponseDto> => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fd2510bac3bc8b72ae646bb593c047d7&units=metric`;
    const result = await fetch(url);
    const data: FetchResponseDto = await HandleResponse(result);
    return data;
  };
}

export const weatherFactory = new WeatherFactory();
