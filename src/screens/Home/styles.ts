import { StyleSheet, Dimensions} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    width: Dimensions.get('screen').width,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: Dimensions.get('screen').height / 10
  }
});
