import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './nearbyjobs.style';
import { COLORS, SIZES } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useFetch from '../../../hook/useFetch';

const Nearbyjobs = () => {
  const { data, isLoading, error } = useFetch('search', {
    query: 'JavaScript developer Sydney',
    num_pages: 1,
  });
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
            />
          ))
        )}
        {/* This is where the jobs are going */}
      </View>
    </View>
  );
};

export default Nearbyjobs;
