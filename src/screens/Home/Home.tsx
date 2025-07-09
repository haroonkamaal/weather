import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Screen } from '../../components/Screen/Screen';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { WeatherCard } from './Components/WeatherCard';
import { styles } from './Styles';
import { Loading } from '../../components/Loader/Loading';
import { ErrorView } from '../../components/Error/ErrorView';
import { useWeatherDetails } from '../../hooks/useWeatherDetails';
import {
  setcityWeatherDetails,
  setWeatherErrorStatusAction,
} from '../../redux/Actions/WeatherAction';

export const Home: React.FC = () => {
  const { fetchWeather, loading, errorMessage, isError, weatherInfo } =
    useWeatherDetails();

  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const currentCity = useRef<string>('');

  const toggleSearchBar = useCallback(() => {
    setShowSearchBar(prev => {
      return !prev;
    });
  }, []);

  const getCurrentCity = useCallback((cityValue: string) => {
    currentCity.current = cityValue;
  }, []);

  const getWeatherDetails = useCallback(() => {
    fetchWeather(currentCity.current);
  }, [fetchWeather]);

  useEffect(() => {
    if (weatherInfo) {
      setcityWeatherDetails(weatherInfo);
      setWeatherErrorStatusAction('');
    }
  }, [weatherInfo]);

  useEffect(() => {
    setWeatherErrorStatusAction(errorMessage);
  }, [errorMessage]);

  return (
    <Screen
      showSearch={true}
      onSearchClick={() => {
        toggleSearchBar();
      }}
    >
      {showSearchBar && (
        <SearchBar
          onGetWeatherClick={getWeatherDetails}
          onChangeCity={getCurrentCity}
        />
      )}
      {!loading && !isError && (
        <View style={styles.container}>
          <WeatherCard />
        </View>
      )}
      {loading && <Loading message="Wait, we are fetching..." />}
      {isError && <ErrorView />}
    </Screen>
  );
};
