import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/Stores';
import { ThemeProvider } from './src/context/themecontext'; // ✅ Import ThemeProvider
import Navigation from './src/Navigation/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider> {/* ✅ Wrap Navigation inside ThemeProvider */}
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}
