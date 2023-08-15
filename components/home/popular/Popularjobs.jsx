import React, { useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useFetch from '../../../hook/useFetch';
const Popularjobs = () => {
  const { data, isLoading, error } = useFetch('search', {
    query: 'Software Developer in Sydney',
    num_pages: 1,
  });
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            renderItem={(item) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          ></FlatList>
        )}
        {/* This is where the jobs are going */}
      </View>
    </View>
  );
};

export default Popularjobs;
