import React from 'react';
import { Text } from 'react-native';

const TextIcon = ({ text, color }: {text :string, color:string}) => {
  return (
    <Text style={{color: color}}>{text}</Text>
  );
};

export default TextIcon;
