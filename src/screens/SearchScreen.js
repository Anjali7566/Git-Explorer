import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepositories } from '../redux/Slices/searchSlice';
import { toggleFavorite } from '../redux/Slices/favouriteSlice';
import RepositoryItem from '../components/RespositoryItem';
import { globalStyles } from '../styles/globalstyles';
import ThemeToggle from '../components/themeToggle';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { repositories, status, error } = useSelector((state) => state.search);
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchRepositories(query));
    }
  };

  return (
    <View style={globalStyles.container}>
      {/* Search Input */}

      <ThemeToggle/>

      
      <TextInput
        style={globalStyles.input}
        placeholder="🔍 Search repositories..."
        placeholderTextColor="#bbb"
        value={query}
        onChangeText={setQuery}
      />

      {/* Buttons */}
      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity style={globalStyles.searchButton} onPress={handleSearch}>
          <Text style={globalStyles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.favoritesButton} onPress={() => navigation.navigate('Favorites')}>
          <Text style={globalStyles.buttonText}>❤️ Favorites</Text>
        </TouchableOpacity>
      </View>

      {/* Loader / Error Message */}
      {status === 'loading' && <ActivityIndicator size="large" color="#f1c40f" />}
      {error && <Text style={globalStyles.errorText}>Error: {error}</Text>}

      {/* Repository List */}
      <FlatList
        data={repositories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RepositoryItem
            repo={item}
            onPress={() => navigation.navigate('Details', { repo: item })}
            onToggleFavorite={() => dispatch(toggleFavorite(item))}
            isFavorite={favorites.some((fav) => fav.id === item.id)}
          />
        )}
      />
    </View>
  );
};


export default SearchScreen;
