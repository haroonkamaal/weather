import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Weather } from '../Type';
import { WeatherResponseDto } from '../../model/Dto/WeatherResponseDto';

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

export const {
  setWeatherLoadingStatus,
  setCityWeather,
  setWeatherErrorStatus,
} = WeatherSlice.actions;

export default WeatherSlice.reducer;
