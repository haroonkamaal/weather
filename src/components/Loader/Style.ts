import { StyleSheet } from 'react-native';
import { DeviceHelper } from '../../utils/DeviceHelper';
import Colors from '../../common/Style/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 99,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  indicator: {
    width: DeviceHelper.calculateWidthRatio(48),
    height: DeviceHelper.calculateWidthRatio(48),
  },
  message: {
    fontSize: 24,
    color: Colors.white,
  },
});
