import React, { useCallback, useRef, useState } from 'react';
import { View } from 'react-native';
import { Screen } from '../../components/Screen/Screen';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { weatherFactory } from '../../factory/WeatherFactory';
import { FetchResponseDto } from '../../services/Type';
import { WeatherResponseDto } from '../../model/Dto/WeatherResponseDto';
import { WeatherCard } from './Components/WeatherCard';
import { styles } from './Styles';
import {
  setcityWeatherDetails,
  setWeatherErrorStatusAction,
  setWeatherLoadingStatusAction,
} from '../../redux/Actions/WeatherAction';
import { RootState } from '../../redux/Store';
import { useSelector } from 'react-redux';
import { Loading } from '../../components/Loader/Loading';
import { ErrorView } from '../../components/Error/ErrorView';

export const Home: React.FC = () => {
  const { isError, isLoading } = useSelector(
    (state: RootState) => state.weather,
  );
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const currentCity = useRef<string>('');

  const toggleSearchBar = useCallback(() => {
    setShowSearchBar(prev => {
      return !prev;
    });
  }, []);

  const fetchWeather = useCallback(async () => {
    if (currentCity.current !== '') {
      setWeatherLoadingStatusAction(true);
      const data: FetchResponseDto = await weatherFactory.getCityWeather(
        currentCity.current,
      );
      if (data.status === 200) {
        setcityWeatherDetails(data.data as WeatherResponseDto);
      } else {
        setWeatherErrorStatusAction(data.error ?? '');
      }
    }
  }, []);

  const getCurrentCity = useCallback((cityValue: string) => {
    currentCity.current = cityValue;
  }, []);

  return (
    <Screen
      showSearch={true}
      onSearchClick={() => {
        toggleSearchBar();
      }}
    >
      {showSearchBar && (
        <SearchBar
          onGetWeatherClick={fetchWeather}
          onChangeCity={getCurrentCity}
        />
      )}
      {!isLoading && !isError && (
        <View style={styles.container}>
          <WeatherCard />
        </View>
      )}
      {isLoading && <Loading message="Wait, we are fetching..." />}
      {isError && <ErrorView />}
    </Screen>
  );
};
