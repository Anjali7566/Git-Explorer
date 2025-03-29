import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import RepositoryItem from '../components/RespositoryItem';
import { globalStyles } from '../styles/globalstyles';



const FavoritesScreen = ({ navigation }) => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Your Favorite Repositories 💖</Text>
      {favorites.length === 0 ? (
        <View style={globalStyles.emptyContainer}>
          <Text style={globalStyles.emptyText}>No favorites yet! ⭐</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={globalStyles.cardWrapper}>
              <RepositoryItem 
                repo={item} 
                onPress={() => navigation.navigate('Details', { repo: item })} 
              />
            </View>
          )}
          contentContainerStyle={globalStyles.listContainer}
        />
      )}
    </View>
  );
};


export default FavoritesScreen;
