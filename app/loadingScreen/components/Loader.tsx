import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Loader = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Загрузка...</Text>
    </View>
  );
};

export { Loader };

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
