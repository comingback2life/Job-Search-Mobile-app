import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './welcome.style';
import { useRouter } from 'expo-router';
import { COLORS, icons, SIZES } from '../../../constants';
const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Samip,</Text>
        <Text style={styles.welcomeMessage}>Find a job for you</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            // value=""
            onChange={() => {}}
            placeholder="What are you looking for ?"
            placeholderTextColor={COLORS.textColor}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
