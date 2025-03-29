import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/Slices/favouriteSlice';

const RepositoryItem = ({ repo, onPress }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((item) => item.id === repo.id);

  return (
    <View style={styles.card}>
      <Image source={{ uri: repo.owner.avatar_url }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{repo.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{repo.description || "No description available"}</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.stats}>⭐ {repo.stargazers_count}</Text>
          <Text style={styles.stats}>🍴 {repo.forks_count}</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.detailsButton} onPress={onPress}>
            <Text style={styles.detailsButtonText}>View Details</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(toggleFavorite(repo))} style={styles.favoriteButton}>
            <Text style={[styles.favoriteIcon, isFavorite && styles.favSelected]}>
              {isFavorite ? '❤️' : '🤍'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    flexDirection: 'row',
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  avatar: { 
    width: 70, 
    height: 70, 
    borderRadius: 35, 
    marginRight: 15, 
    borderWidth: 2,
    borderColor: '#f1c40f',
  },
  info: { 
    flex: 1,
    justifyContent: 'center'
  },
  name: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: 5 
  },
  description: {
    fontSize: 14, 
    color: '#bbb', 
    marginBottom: 8 
  },
  statsContainer: { 
    flexDirection: 'row', 
    gap: 10,
    marginBottom: 12 
  },
  stats: { 
    fontSize: 14, 
    fontWeight: 'bold',
    color: '#f1c40f',
    backgroundColor: 'rgba(241, 196, 15, 0.2)',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 6
  },
  buttons: { 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  detailsButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    shadowColor: '#1E90FF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  detailsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  favoriteButton: {
    padding: 5
  },
  favoriteIcon: {
    fontSize: 24,
    color: '#bbb'
  },
  favSelected: {
    color: '#e74c3c', 
    textShadowColor: '#e74c3c',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  }
});

export default RepositoryItem;
