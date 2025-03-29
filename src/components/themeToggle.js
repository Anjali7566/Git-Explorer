import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/Slices/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <View
      style={{
        marginLeft:'93%',
        transform: [{ translateX: -10.5 }],
        marginBottom: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => dispatch(toggleTheme())}
        style={{
          width: 30,
          height: 30,
          borderRadius: 22.5,
          backgroundColor: darkMode ? '#222' : '#f1f1f1',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 6,
          elevation: 6,
        }}
      >
        <Text style={{ fontSize: 22 }}>{darkMode ? '🌞' : '🌙'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeToggle;
