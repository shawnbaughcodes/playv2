import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './styles';
interface TitleProps {
  title: string
}
const Title = ({ title }: TitleProps) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Title;