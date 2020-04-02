import React from 'react';
import { View, Text, SafeAreaView } from 'react-native'
import Title from '../../components/Title';
import Card from '../../components/Card';
import {styles} from './styles';

const Sport = () => {
  return (
    <SafeAreaView>
      <Title title="Sport" />
      <View style={styles.body}>
        <Card
          full
          title="Sport"
          description="des"
          onClick={() => console.log('something great')}
        />
      </View>
      <Text>Something Cool</Text>
    </SafeAreaView>
  );
};

export default Sport;