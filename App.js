import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext'
import { setNavigator } from './src/navigationRef';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
})
trackListFlow.navigationOptions ={
  title: "Tracks",
  tabBarIcon: <MaterialCommunityIcons name="map-marker-path" size={30} />
}

const trackCreateFlow = createStackNavigator({
  TrackCreate: TrackCreateScreen
})
trackCreateFlow.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome5 name="plus-square" size={30} />
}

const accountFlow = createStackNavigator({
  Account: AccountScreen
})
accountFlow.navigationOptions = {
  title: 'Account',
  tabBarIcon: <MaterialCommunityIcons name="account-cog-outline" size={30} />
}

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignUpScreen,
    Signin: SignInScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    trackCreateFlow,
    accountFlow,
  },
  {
    tabBarOptions:{
      style: {
        height: 60,
        paddingTop: 8
      }
    }
  })
})


const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => { setNavigator(navigator) }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
