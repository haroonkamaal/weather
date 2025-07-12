import { WeatherResponseDto } from '../model/Dto/WeatherResponseDto';

export interface Weather {
  weatherDetail?: WeatherResponseDto | undefined;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
}
