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
    query: 'Javascript Developer Sydney',
    num_pages: 1,
  });
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);
  const handleCardPress = (item) => {
    router.push(`/job-details/${item?.job_id}`);
    setSelectedJob(item.job_id);
  };
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
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                handleCardPress={() => handleCardPress(item)}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
        {/* This is where the jobs are going */}
      </View>
    </View>
  );
};

export default Popularjobs;
