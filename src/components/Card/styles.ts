import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('screen').width / 2.3,
    height: Dimensions.get('screen').width / 2.3,
    backgroundColor: '#333333',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight:  '500',
    color: '#f3f3f3f3',
    textTransform: 'capitalize'
  },
  description: {
    fontSize: 10,
    fontStyle: 'italic',
    color: '#f3f3f3f3'
  }
});