import { MainDto } from '../MainDto';
import { CloudsDto } from './CloudsDto';
import { CoordDto } from './CoordDto';
import { RainDto } from './RainDto';
import { SysDto } from './SysDto';
import { WeatherDto } from './WeatherDto';
import { WindDto } from './WindDto';

export interface WeatherResponseDto {
  coord: CoordDto;
  weather: WeatherDto[];
  base: string;
  main: MainDto;
  visibility: number;
  wind: WindDto;
  rain: RainDto;
  clouds: CloudsDto;
  dt: number;
  sys: SysDto;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
