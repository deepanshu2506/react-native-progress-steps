import React from 'react';
import { View } from 'react-native';

const ProgressButtons = props => (
  <View style={{ flexDirection: 'row', marginTop: 70}}>
    <View style={{ position: 'absolute', left: 20, bottom: 15 }}>{props.renderPreviousButton()}</View>
    <View style={{ position: 'absolute', right: 20, bottom: 15 }}>{props.renderNextButton()}</View>
  </View>
);

export default ProgressButtons;
