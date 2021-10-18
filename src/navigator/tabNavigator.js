import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChatIcon, FriendIcon, LikeIcon, ProfileIcon} from '../../assets/svg';
import {createStackNavigator} from '@react-navigation/stack';
import * as colors from '../components/colors';
import Messages from '../screens/chat';
import Connect from '../screens/connect';
import Like from '../screens/like';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();
const MessageStack = createStackNavigator();

function MessageStackScreen() {
  return (
    <MessageStack.Navigator headerMode={false}>
      <MessageStack.Screen name="messages" component={Messages} />
    </MessageStack.Navigator>
  );
}

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'connect') {
            return <FriendIcon color={focused ? colors.red : colors.ash} />;
          } else if (route.name === 'profile') {
            return <ProfileIcon color={focused ? colors.red : colors.ash} />;
          } else if (route.name === 'like') {
            return <LikeIcon color={focused ? colors.red : colors.ash} />;
          } else if (route.name === 'messages') {
            return <ChatIcon color={focused ? colors.red : colors.ash} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.red,
        inactiveTintColor: colors.ash,
      }}>
      <Tab.Screen name="connect" component={Connect} />
      <Tab.Screen name="like" component={Like} />
      <Tab.Screen name="messages" component={MessageStackScreen} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}
