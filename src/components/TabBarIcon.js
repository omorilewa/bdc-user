import React, { Component } from 'react';
import { string, bool } from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default class TabBarIcon extends Component {
  static propTypes = {
    name: string,
    focused: bool,
  }

  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
