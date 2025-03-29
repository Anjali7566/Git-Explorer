import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/globalstyles';


const DetailsScreen = ({ route }) => {
  const { repo } = route.params;
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(repo.contributors_url);
        const data = await response.json();
        setContributors(data);
      } catch (error) {
        console.error('Error fetching contributors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, [repo]);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.card}>
        <Image source={{ uri: repo.owner.avatar_url }} style={globalStyles.avatar} />
        <View style={globalStyles.cardContent}>
          <Text style={globalStyles.textPrimary}>{repo.name}</Text>
          <Text style={globalStyles.textSecondary}>{repo.description}</Text>
          <View style={globalStyles.statsContainer}>
            <Text style={globalStyles.stats}>⭐ {repo.stargazers_count}</Text>
            <Text style={globalStyles.stats}>🍴 {repo.forks_count}</Text>
            <Text style={globalStyles.stats}>🛠 {repo.language}</Text>
          </View>
          <Text style={globalStyles.date}>📅 Created: {new Date(repo.created_at).toDateString()}</Text>
          <Text style={globalStyles.date}>🔄 Updated: {new Date(repo.updated_at).toDateString()}</Text>
        </View>
      </View>

      <Text style={globalStyles.textPrimary}>Contributors:</Text>
      {loading ? <ActivityIndicator size="large" color="#f1c40f" /> : (
        <FlatList
          data={contributors}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={globalStyles.contributorCard}>
              <Image source={{ uri: item.avatar_url }} style={globalStyles.contributorAvatar} />
              <Text style={globalStyles.contributorName}>{item.login}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};



export default DetailsScreen;
