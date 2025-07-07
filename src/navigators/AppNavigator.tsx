import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './NavigationParamList';
import { Home } from '../screens/Home/Home';
import { Routes } from './Routes';

const RootStack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: true }}>
      <RootStack.Screen name={Routes.Home} component={Home} />
    </RootStack.Navigator>
  );
};
