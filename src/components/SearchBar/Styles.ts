import { StyleSheet } from 'react-native';
import Colors from '../../common/Style/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 4,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
});
