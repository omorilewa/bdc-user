import React, { Component } from 'react';
import { object } from 'prop-types';
import { Text } from 'react-native';

export class MonoText extends Component {
  static propTypes = {
    style: object,
  }

  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
