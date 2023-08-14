import React, { useState } from 'react';
import { View, Text, TextInput, Image, FlatList } from 'react-native';

import styles from './welcome.style';
import { useRouter } from 'expo-router';
import { COLORS, icons, SIZES } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-Time');
  const jobTypes = ['Full-Time', 'Part-Time', 'Contract'];
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
            value=""
            onChange={() => {}}
            placeholder="What are you looking for ?"
            placeholderTextColor={COLORS.textColor}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{
            columnGap: SIZES.small,
          }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
