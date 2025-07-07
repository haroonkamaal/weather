import { WeatherResponseDto } from '../../model/Dto/WeatherResponseDto';
import {
  setCityWeather,
  setWeatherErrorStatus,
  setWeatherLoadingStatus,
} from '../Reducer/WeatherSlice';
import { store } from '../Store';

export const setcityWeatherDetails = (weatherInfo: WeatherResponseDto) => {
  store.dispatch(setCityWeather(weatherInfo));
};
export const setWeatherLoadingStatusAction = (status: boolean) => {
  store.dispatch(setWeatherLoadingStatus(status));
};
export const setWeatherErrorStatusAction = (errorMessage: string) => {
  store.dispatch(setWeatherErrorStatus(errorMessage));
};
