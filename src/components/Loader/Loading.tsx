import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { styles } from './Style';
import Colors from '../../common/Style/Colors';

interface Props {
  message?: string;
}

export const Loading: React.FC<Props> = ({ message = '' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.white} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};
