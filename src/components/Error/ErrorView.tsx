import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/Store';

export const ErrorView: React.FC = () => {
  const { errorMessage } = useSelector((state: RootState) => state.weather);
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};
