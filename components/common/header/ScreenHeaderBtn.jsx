import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './screenheader.style';
import { TouchableOpacity } from 'react-native';

const ScreenHeaderBtn = ({ iconUrl, dimensions, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimensions)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
