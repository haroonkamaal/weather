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
import { fibboci, occurence } from '../../utils/utils';
import { useSelector } from 'react-redux';
import { weatherDetailsSelector } from '../../redux/Reducer/WeatherSlice';
import { RootState } from '../../redux/Store';

export const Home: React.FC = () => {
  const { fetchWeather, loading, errorMessage, isError, weatherInfo } =
    useWeatherDetails();

  const searchedCity = useSelector(
    (state: RootState) => state.weather?.weatherDetail?.name ?? '',
  );

  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  const currentCity = useRef<string>(searchedCity);

  const weatherDetail = useSelector(
    weatherDetailsSelector(currentCity.current ?? ''),
  );

  const toggleSearchBar = useCallback(() => {
    setShowSearchBar(prev => {
      return !prev;
    });
  }, []);

  const getCurrentCity = useCallback((cityValue: string) => {
    currentCity.current = cityValue;
  }, []);

  const getWeatherDetails = useCallback(() => {
    if (
      !weatherDetail ||
      (weatherDetail && weatherDetail.name !== currentCity.current)
    ) {
      console.log('called api');
      fetchWeather(currentCity.current);
    }
  }, [fetchWeather, weatherDetail]);

  useEffect(() => {
    if (weatherInfo) {
      setcityWeatherDetails(weatherInfo);
      setWeatherErrorStatusAction('');
    }
  }, [weatherInfo]);

  useEffect(() => {
    setWeatherErrorStatusAction(errorMessage);
  }, [errorMessage]);

  useEffect(() => {
    // occurence(['a', 'a', 'd', 'c', 'd', 'g', 'd', 'c', 'b', 'g', 'b', 'f']);
    // fibboci(8);
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
          onGetWeatherClick={getWeatherDetails}
          onChangeCity={getCurrentCity}
          searchedQuery={currentCity.current}
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
