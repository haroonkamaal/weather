import { StyleSheet } from 'react-native';
import Colors from '../../../common/Style/Colors';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    minHeight: '70%',
    gap: 24,
  },
  weatherDescription: {
    fontSize: 24,
    color: Colors.white,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    flexWrap: 'wrap',
  },
  icon: { width: 100, height: 100 },
  temperature: { fontSize: 36, color: Colors.white, fontWeight: 'bold' },
  city: {
    fontSize: 24,
    color: Colors.white,
    fontWeight: 'bold',
    fontStyle: 'italic',
    alignSelf: 'flex-start',
  },
});
