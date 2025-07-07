/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigators/AppNavigator';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import Colors from './src/common/Style/Colors';

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              <StatusBar
                backgroundColor="#ffcc00" // set your desired color
                translucent
                barStyle="dark-content" // or "light-content"
              />
              <AppNavigator />
            </SafeAreaView>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
});

export default App;
