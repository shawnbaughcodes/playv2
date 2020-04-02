import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    width: Dimensions.get('screen').width,
    flexDirection: 'column',
    justifyContent: 'center'
  }
});