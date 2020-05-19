import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

import Champs from '../components/Champs';
import AddChamp from '../components/AddChamp';
import Checkout from '../components/ModalScreen';

const Tab = createBottomTabNavigator();

function IconWithBadge({name, badgeCount, color, size}) {
  return (
    <View style={{width: 24, height: 24, margin: 5}}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function HomeIconWithBadge(props) {
  return <IconWithBadge {...props} badgeCount={7} />;
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <HomeIconWithBadge
                name={
                  focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Add') {
            return (
              <Ionicons
                name={focused ? 'ios-add-circle' : 'ios-add'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'tomato',
      }}>
      <Tab.Screen name="Home" component={Champs} />
      <Tab.Screen name="Add" component={AddChamp} />
    </Tab.Navigator>
  );
}

function Screens() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={TabNavigator} />
        <RootStack.Screen name="Checkout" component={Checkout} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Screens;
