import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import {styles} from './styles';
import { TouchableOpacity } from 'react-native';

interface CardProps {
  full: boolean;
  title: string;
  description: string;
  onClick: () => void;
}

const Card = ({ full, title, description, onClick }: CardProps) => {
  const widthSelection = full ?
    Dimensions.get('screen').width / 1.1 :
    Dimensions.get('screen').width / 2.3;
  const style = {
    ...styles.wrapper,
    width: widthSelection,
    height: widthSelection
  }
  
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={style}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card;