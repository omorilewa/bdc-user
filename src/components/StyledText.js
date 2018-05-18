import React, { Component } from 'react';
import { object, number, oneOfType } from 'prop-types';
import { Text } from 'react-native';

export class MonoText extends Component {
  static propTypes = {
    style: oneOfType([object, number]),
  }

  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
