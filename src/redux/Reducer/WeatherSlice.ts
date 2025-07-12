import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from '../Type';
import { WeatherResponseDto } from '../../model/Dto/WeatherResponseDto';
import { RootState } from '../Store';

const initialState: Weather = {
  weatherDetail: undefined,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

const WeatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherLoadingStatus: (
      state: Weather,
      _action: PayloadAction<boolean>,
    ) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = '';
    },
    setCityWeather: (
      state: Weather,
      action: PayloadAction<WeatherResponseDto>,
    ) => {
      console.log('WeatherSlice::::', action.payload);
      state.weatherDetail = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = '';
    },
    setWeatherErrorStatus: (state: Weather, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload || 'Failed to fetch weather';
    },
  },
});

const weatherDetails = (state: RootState): WeatherResponseDto | undefined =>
  state.weather.weatherDetail;

export const weatherDetailsSelector = (cityName?: string) =>
  createSelector([weatherDetails], info => {
    console.log('Selector:::', info);
    console.log('Selector:::cityName', cityName);
    if (info?.name.toLowerCase() === cityName?.toLocaleLowerCase()) return info;
    else null;
  });

export const {
  setWeatherLoadingStatus,
  setCityWeather,
  setWeatherErrorStatus,
} = WeatherSlice.actions;

export default WeatherSlice.reducer;
