import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#985BCF" style={styles.indicator} />
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Carregando...</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    transform: [{ scale: 1.5 }],
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 20, // Ajuste o valor para tornar os cantos mais arredondados
  },
  loadingText: {
    color: '#985BCF',
    fontSize: 16,
  },
});

export default Loading;
