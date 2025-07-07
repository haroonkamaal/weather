import { Dimensions, Platform } from 'react-native';

export class DeviceHelper {
  static dimensions = Dimensions.get('screen');

  static isAndroid(): boolean {
    return Platform.OS === 'android';
  }

  static calculateWidthRatio(size: number): number {
    const widthInDesign = 390;
    return (size * this.dimensions.width) / widthInDesign;
  }

  static calculateHeightRatio(size: number): number {
    const heightInDesign = 844;
    return (size * this.dimensions.height) / heightInDesign;
  }

  static width(): number {
    return this.dimensions.width;
  }

  static height(): number {
    return this.dimensions.height;
  }
}
