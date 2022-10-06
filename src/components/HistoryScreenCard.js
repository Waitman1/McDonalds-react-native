import { Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const HistoryScreenCard = ({ imageUrl, name }) => {
  return (
    <TouchableOpacity
      style={{
        height: 100,
        width: 100,
        marginRight: 12,
        backgroundColor: 'red',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{ height: 40, width: 40 }}
      />
      <Text style={{ paddingTop: 10, color: 'white' }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default HistoryScreenCard;
