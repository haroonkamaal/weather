import React from 'react';
import { styles } from './Styles';
import { TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Icons } from '../../assets';

interface Props {
  onChangeCity: (city: string) => void;
  onGetWeatherClick: () => void;
  searchedQuery?: string;
}

export const SearchBar: React.FC<Props> = ({
  onChangeCity,
  onGetWeatherClick,
  searchedQuery = '',
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={searchedQuery}
        style={styles.searchInput}
        placeholder="Search city"
        onChangeText={onChangeCity}
      />
      <TouchableOpacity onPress={onGetWeatherClick}>
        <Image source={Icons.search} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
};
