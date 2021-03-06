import React, { Component } from 'react';
import { Notifications } from 'expo';
import { createSwitchNavigator } from 'react-navigation';
import { MainTabNavigator } from '.';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const AppNavigator = createSwitchNavigator({
  Main: MainTabNavigator,
});

export default class RootNavigation extends Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    return this._notificationSubscription && this._notificationSubscription.remove();
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`); // eslint-disable-line
  };

  render() {
    return <AppNavigator />;
  }
}
