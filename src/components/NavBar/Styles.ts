import Colors from '../../common/Style/Colors';
import { DeviceHelper } from '../../utils/DeviceHelper';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    height: DeviceHelper.calculateHeightRatio(52),
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: Colors.white,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  searchButton: { width: 'auto', height: 30 },
});
