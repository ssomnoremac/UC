// @flow
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
export type ButtonProps = {
  backgroundColor: string,
  fontColor: string,
  onPress: () => void,
  size: string,
  style: StyleSheet.Styles,
  text: string,
};
const getButtonDimention = (size: string): number => {
  switch (size) {
    case 'small':
      return 40;
    case 'medium':
      return 58;
    case 'large':
      return 76;
    default:
      return 58;
  }
};
const getButtonFontSize = (size: string): number => {
  switch (size) {
    case 'small':
      return 8;
    case 'medium':
      return 11;
    case 'large':
      return 15;
    default:
      return 11;
  }
};
export default class Button extends Component<ButtonProps, *> {
  static propTypes = {
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    size: PropTypes.string,
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
    text: PropTypes.string.isRequired,
  };
  render = (): React$Element<*> => {
    const {
      backgroundColor = 'black',
      fontColor = 'white',
      onPress,
      size = 'medium',
      style,
      text,
    } = this.props;
    const computedStyles = styles(backgroundColor, fontColor, size);
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[computedStyles.container, style]}>
          <Text style={computedStyles.text}>
            {text.toUpperCase()}
          </Text>
       </View>
      </TouchableOpacity>
    );
  };
}
const styles = (
  backgroundColor: string,
  fontColor: string,
  size: string,
): StyleSheet.styles =>
  StyleSheet.create({
    container: {
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getButtonDimention(size)/2,
    height: getButtonDimention(size),
    width: getButtonDimention(size),
  },
  text: {
    backgroundColor: 'transparent',
    color: fontColor,
    fontFamily: Platform.OS === 'web' ? 'sans-serif' : undefined,
    fontSize: getButtonFontSize(size),
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});