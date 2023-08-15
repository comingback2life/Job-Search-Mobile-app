import { Stack, useRouter, useSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, View } from 'react-native';
import useFetch from '../../hook/useFetch';
import { COLORS, SIZES, icons } from '../../constants';
import { Company, JobTabs, ScreenHeaderBtn } from '../../components';
const JobDetails = () => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {

    };
    const params = useSearchParams();
    const router = useRouter();
    const { data, isLoading, error, refetch } = useFetch('job-details', {
        job_id: params?.id
    });
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.left} dimensions='60%' handlePress={() => router.back()}></ScreenHeaderBtn>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.share} dimensions='60%'></ScreenHeaderBtn>
                    ),
                    headerTitle: ''
                }} />
            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {isLoading ? (
                        <ActivityIndicator size='large' color={COLORS.primary} />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : data.length === 0 ? (
                        <Text>No data!</Text>
                    ) : (<View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                        <Company companyLogo={data[0].employer_logo}
                            jobTitle={data[0].job_title}
                            companyName={data[0].employer_name}
                            location={data[0].job_country}
                        />
                        <JobTabs />

                    </View>)}
                </ScrollView>
            </>
        </SafeAreaView >
    );
};

export default JobDetails;