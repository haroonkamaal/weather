import React from 'react';
import { styles } from './Style';
import { View, Text, Image } from 'react-native';
import { fetchWeatherIcon } from '../../../utils/WeatherImage';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/Store';

export const WeatherCard: React.FC = () => {
  const weatherDetail = useSelector(
    (state: RootState) => state.weather.weatherDetail,
  );

  if (!weatherDetail) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{weatherDetail.name}</Text>
      <Text style={styles.temperature}>{`${weatherDetail.main.temp}°`}</Text>

      <Image
        style={styles.icon}
        src={fetchWeatherIcon(weatherDetail?.weather[0].icon)}
      />

      <Text style={styles.weatherDescription}>
        {weatherDetail.weather[0].description}
      </Text>
    </View>
  );
};
