import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  Text
} from 'react-native';
import Title from '../../components/Title';
import { styles } from './styles';
import Card from '../../components/Card';
import sports from '../../data/sports.json';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';


interface HomeProps {
  navigation: DrawerNavigationHelpers
}

const Home = ({ navigation }: HomeProps) => {
  const selectSport = () => {
    navigation.navigate("Sport");
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Title title="Home" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
            {sports.map((sport, i) => (
              <Card
                key={`sport-card-${i}`}
                full={false}
                title={sport.title}
                description={sport.description}
                onClick={selectSport}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Home