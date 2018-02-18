import Expo from'expo';
import React from 'react';
import { StyleSheet, Text, View, Settings } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';
import firebase from 'firebase';


export default class App extends React.Component {
  render() {

    //NAVIGATOR new instance
    const MainNavigator = TabNavigator({
        // Tabs key names
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        main: {
          screen: TabNavigator({
            map: { screen : MapScreen },
            eventos: { screen: DeckScreen },
              review: { 
                screen: StackNavigator({
                  review: { screen: ReviewScreen },
                  settings: {screen: SettingsScreen }
                })
              }
          })
        }
    }, {
        navigationOptions:{
            tabBarVisible: false
        },
        lazy: true
    });

    return (
                      <Provider store = {store}>
      <View style={styles.container}>
<MainNavigator />
      </View>
                      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

