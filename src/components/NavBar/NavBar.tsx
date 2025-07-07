import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';

import { NavbarProps } from './Types';
import Colors from '../../common/Style/Colors';
import { Icons } from '../../assets';

export const NavBar: React.FC<NavbarProps> = ({
  title = 'Weather',
  showSearch = true,
  onSearchClick,
}) => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.title}>{title}</Text>
      {showSearch && (
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            onSearchClick?.();
          }}
        >
          <Image source={Icons.search} style={styles.searchIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};
