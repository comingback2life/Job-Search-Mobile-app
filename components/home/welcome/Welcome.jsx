import React from 'react';
import { View, Text } from 'react-native';

import styles from './welcome.style';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';
const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Samip,</Text>
        <Text style={styles.welcomeMessage}>Find a job for you</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}></View>
      </View>
    </View>
  );
};

export default Welcome;
