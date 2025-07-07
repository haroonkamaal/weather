import { WeatherResponseDto } from '../model/Dto/WeatherResponseDto';

export interface Weather {
  weatherDetail?: WeatherResponseDto;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
}
