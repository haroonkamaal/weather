import { FetchResponseDto } from '../services/Type';
import { weatherFactory } from '../factory/WeatherFactory';
import { WeatherResponseDto } from '../model/Dto/WeatherResponseDto';
import { useState } from 'react';

export const useWeatherDetails = () => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherResponseDto>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const fetchWeather = async (cityName: string) => {
    if (cityName !== '') {
      setIsError(false);
      setLoading(true);
      const data: FetchResponseDto = await weatherFactory.getCityWeather(
        cityName,
      );
      setLoading(false);
      if (data.status === 200) {
        setIsError(false);
        setWeatherInfo(data.data as WeatherResponseDto);
      } else {
        setWeatherInfo(undefined);
        setIsError(true);
        setErrorMessage(data.error ?? 'Failed to fetch weather');
      }
    }
  };
  return {
    weatherInfo,
    loading,
    isError,
    errorMessage,
    fetchWeather,
  };
};
